import {Link, Outlet} from "react-router-dom";

export default function LayoutPage() {
    return (
        <div>
        <div className={'sub-Container'}>
            <span className={'sub-content'}><Link to={'users'}>Users</Link></span>
            <span className={'sub-content'}><Link to={'posts'}>Posts</Link></span>
            <span className={'sub-content'}><Link to={'comments'}>Comments</Link></span>
        </div>
            <Outlet />
        </div>
        )
     }
