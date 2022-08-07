import Comments from "../components/Comments/Comments";
import {Outlet, useParams} from "react-router-dom";

export default function CommentsPage() {
    const {postId} = useParams();
    return (
        <div>
            <Comments postId={postId}/>
            <Outlet/>
        </div>
    )
}
