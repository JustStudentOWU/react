import './App.css';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LayoutPage from "./pages/LayoutPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";

function App() {
    return (
        <div>



            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'/homepage'} element={<HomePage/>}/>
                    <Route path={'/aboutpage'} element={<AboutPage/>}/>
                    <Route path={'/layoutpage'} element={<LayoutPage/>}>
                        <Route path={'users'} element={<UsersPage/>}/>
                        <Route path={'posts'} element={<PostsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
