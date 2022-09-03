import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {usersReducer, postsReducer, commentsReducer} from "./slices";

const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}
