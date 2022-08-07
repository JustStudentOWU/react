import Posts from "../components/Posts/Posts";
import {Outlet, useParams} from "react-router-dom";

export default function PostsPage() {
    const {id} = useParams()
    return (
        <div>
            <Outlet/>
            <Posts id={id}/>
        </div>
    )
}
