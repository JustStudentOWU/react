import {Link, Outlet} from "react-router-dom";

export default function LayoutPage() {
    return (
        <div>
        <div className={'text-container'}>
            <span><Link to={'users'}>Users</Link></span>
            <span><Link to={'posts'}>Posts</Link></span>
            <span><Link to={'comments'}>Comments</Link></span>
        </div>
            <Outlet />
        </div>
        )
     }
