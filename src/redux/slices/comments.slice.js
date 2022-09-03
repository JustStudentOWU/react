import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../../services";

const initialState = {
    comments: [],
    errors: null
};

const getAll = createAsyncThunk(
    'commentsSlice/getAll',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await commentsService.getComments();
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.errors = null;
            state.comments = action.payload;
        })
})

const {reducer: commentsReducer} = commentsSlice;

const commentsActions = {
    getAll
}

export {
    commentsReducer,
    commentsActions
}
