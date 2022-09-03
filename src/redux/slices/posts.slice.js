import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../../services";

const initialState = {
    posts: [],
    errors: null
}

const getAll = createAsyncThunk(
    'postsSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await postsService.getAllPosts();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.errors = null;
            state.posts = action.payload;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload;
        })
})

const {reducer: postsReducer} = postsSlice;

const postsAction = {
    getAll
}

export {
    postsReducer,
    postsAction
}
