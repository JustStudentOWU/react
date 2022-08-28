import Posts from "../components/posts/Posts";
import {Outlet, useParams} from "react-router-dom";

export default function PostsPage() {
    let {id} = useParams();
    return (
        <div>
            <Posts id={id}/>
            <Outlet/>
        </div>
    )
}
