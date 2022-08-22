import Posts from "../components/Posts/Posts";
import {Outlet, useParams} from "react-router-dom";

export default function PostPage() {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            <Posts id={id}/>
            <Outlet/>
        </div>
    )
}
