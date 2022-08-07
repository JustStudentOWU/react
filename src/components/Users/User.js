import {Link} from "react-router-dom";

export default function User({item}) {
    return (
        <div className={'text-container'}>
            {item.name}  - <span><Link to={item.id.toString()}>user posts </Link></span>
        </div>
        )
     }
