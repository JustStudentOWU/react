import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersServices} from "../../services";

const initialState = {
    users: [],
    userForUpdate: null,
    errors: null
};

const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUser',
    async (_, {rejectedWithValue}) => {
        try {
            const {data} = await usersServices.getUsers();
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);

const updateUser = createAsyncThunk(
    'usersSlice/updateUser',
    async ({id, user}, {rejectWithValue}) => {
        try {
            const {data} = await usersServices.updateUserById(id, user);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const deleteUser = createAsyncThunk(
    'usersSlice/deleteUser',
    async ({id}, {rejectWithValue}) => {
        try {
            await usersServices.deleteUserById(id);
            return id
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const createUser = createAsyncThunk(
    'usersSlice/createUser',
    async (user,{rejectWithValue}) => {
        try {
            const {data} = await usersServices.createUser(user);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const usersSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserForUpdate: (state, action) => {
            state.userForUpdate = action.payload;
        }
    },
    extraReducers: (builder => {
        builder
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.errors = null;
                state.users = action.payload
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const chosenUser = state.users.find(value => value.id === action.payload.id)
                Object.assign(chosenUser, action.payload);
                state.userForUpdate = null;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                const del = state.users.findIndex(user => user.id === action.payload);
                state.users.splice(del, 1);
            })
            .addCase(createUser.fulfilled,(state, action) => {
                state.users.push(action.payload);
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').splice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null;
                }
            })
    })
})

const {reducer: usersReducer, actions: {setUserForUpdate}} = usersSlice;

const usersActions = {
    getAllUsers,
    updateUser,
    createUser,
    deleteUser,
    setUserForUpdate,
}

export {
    usersActions,
    usersReducer
}
