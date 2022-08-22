import {Link} from "react-router-dom";

export default function User({user}) {
    return (
        <div>
            {user.id} - {user.name} -
            <span><Link to={user.id.toString()}>posts details</Link></span> -
            <span><Link to={user.id.toString()}>comments details</Link></span>
        </div>
        )
     }
