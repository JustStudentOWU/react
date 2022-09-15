import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

const initialState = {
    posts: [],
    errors: null,
    postForUpdate: null,
};

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postsService.getPosts();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const createNewPost = createAsyncThunk(
    'postsSlice/createNewPost',
    async (post, {rejectWithValue}) => {
        try {
            const {data} = await postsService.createPost(post);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updatePost = createAsyncThunk(
    'postsSlice/updatePost',
    async ({id, post}, {rejectWithValue}) => {
        try {
            const {data} = await postsService.updatePostById(id, post);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const deletePost = createAsyncThunk(
    'postsSlice/deletePost',
    async ({id}, {rejectWithValue}) => {
        try {
            await postsService.deletePostById(id);
            return id;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {
        setPostForUpdate: (state, action) => {
            state.postForUpdate = action.payload;
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(deletePost.fulfilled, (state, action) => {
                const del = state.posts.findIndex(value => value.id === action.payload);
                state.posts.splice(del, 1);
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                const chosenPost = state.posts.find(value => value.id === action.payload.id);
                Object.assign(chosenPost, action.payload);
                state.postForUpdate = null;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.errors = null;
            })
            .addCase(createNewPost.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })
    })
})

const {reducer: postsReducer, actions: {setPostForUpdate}} = postsSlice;

const postsActions = {
    setPostForUpdate,
    getAll,
    createNewPost,
    deletePost,
    updatePost
};

export {
    postsActions,
    postsReducer
}
