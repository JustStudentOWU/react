import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1><Link to={'/'}>Menu</Link></h1>
            <div>
                <span><Link to={'/users'}>users</Link></span> -
                <span><Link to={'/posts'}>posts</Link></span> -
                <span><Link to={'/comments'}>comments</Link></span>
            </div>
        </div>
        )
     }
