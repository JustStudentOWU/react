import {Route, Routes} from "react-router-dom";

import './App.css';
import {urls} from "./constants";
import {CommentsPage, MainLayout, PostsPage, UsersPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={urls.users} element={<UsersPage/>}/>
                <Route path={urls.posts} element={<PostsPage/>}/>
                <Route path={urls.comments} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
