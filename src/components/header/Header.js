import {Link} from "react-router-dom";
import {urls} from "../../constants";

export function Header() {
    return (
        <div>
            <span><Link to={urls.users}>users</Link></span><br/>
            <span><Link to={urls.posts}>posts</Link></span><br/>
            <span><Link to={urls.comments}>comments</Link></span><br/>
        </div>
        )
     }
