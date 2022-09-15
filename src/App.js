import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout, UserPage, PostPage} from "./pages";
import {urls} from "./constants";

function App() {
    return (
        <div>
            <Routes>
                <Route path={urls.home} element={<MainLayout/>}>
                    <Route path={urls.users} element={<UserPage/>}/>
                    <Route path={urls.posts} element={<PostPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
