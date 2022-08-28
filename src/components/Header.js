import {Link} from "react-router-dom";

export default function header() {
    return (
        <div>
            <h1><Link to={'/'}>Menu</Link></h1>
            <div>
                <div><Link to={'/users'}>Users</Link></div>
                <div><Link to={'/posts'}>Posts</Link></div>
                <div><Link to={'/comments'}>Comments</Link></div>
            </div>
        </div>
    )
}
