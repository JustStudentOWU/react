import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {usersReducer, postsReducer} from "./slices";

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
