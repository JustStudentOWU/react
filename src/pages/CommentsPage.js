import Comments from "../components/comments/Comments";
import {Outlet} from "react-router-dom";

export default function CommentsPage() {
    return (
        <div>
            <Comments/>
            <Outlet/>
        </div>
    )
}
