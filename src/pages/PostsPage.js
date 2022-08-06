import Posts from "../components/Posts/Posts";
import {Outlet} from "react-router-dom";

export default function PostsPage() {
    return (
        <div>
        <Posts />
        <Outlet />
        </div>
        )
     }
