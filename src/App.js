import './App.css';
import MainContainer from "./pages/MainContainer";
import {Route, Routes} from "react-router-dom";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import PostPage from "./pages/PostPage";
import CommentsPage from "./pages/CommentsPage";
import UsersPage from "./pages/UsersPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainContainer/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<PostPage/>}/>
                        <Route path={':id_comments'} element={<CommentsPage/>}/>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
