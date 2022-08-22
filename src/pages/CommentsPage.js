import {Outlet, useParams} from "react-router-dom";
import Comments from "../components/Comments/Comments";

export default function CommentsPage() {
    const {id} = useParams();
    return (
        <div>
            <Comments id={id}/>
            <Outlet/>
        </div>
    )
}
