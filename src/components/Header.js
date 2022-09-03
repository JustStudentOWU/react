import {Link} from "react-router-dom";
import {urls} from "../constants";

export function Header() {
    return (
        <div>
            <h1><Link to={'/'}>Home page</Link></h1>
            <h3><Link to={urls.users}>Users</Link></h3>
            <h3><Link to={urls.posts}>Posts</Link></h3>
            <h3><Link to={urls.comments}>Comments</Link></h3>
        </div>
        )
     }
