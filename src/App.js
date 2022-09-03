import {Route, Routes} from "react-router-dom";

import './App.css';
import {urls} from "./constants";
import {MainLayout, PostsPage, UsersPage, CommentsPage} from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={urls.users} element={<UsersPage/>}/>
                    <Route path={urls.posts} element={<PostsPage/>}/>
                    <Route path={urls.comments} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
