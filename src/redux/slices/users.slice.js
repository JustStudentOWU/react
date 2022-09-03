import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from "../../services";

const initialState = {
    users: [],
    errors: null,
    chosenUser: null
}

const getAll = createAsyncThunk(
    'usersSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await usersService.getUsers();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const getUserById = createAsyncThunk(
    'usersSlice/getUserById',
    async (id,{rejectedWithValue}) => {
        try {
            const {data} = await usersService.getUser(id);
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    extraReducers: (builder) => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.errors = null;
            state.users = action.payload;
        })
        .addCase(getAll.rejected, (state, action) => {
            state.errors = action.payload;
        })
        .addCase(getUserById.fulfilled,(state, action) => {
            state.chosenUser = action.payload;
        })
})

const {reducer: usersReducer, actions: {setToggle}} = usersSlice;

const usersActions = {
    getAll,
    getUserById,
    setToggle
}
export {
    usersReducer,
    usersActions
}
