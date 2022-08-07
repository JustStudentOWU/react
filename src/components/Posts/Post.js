import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div className={'text-container'}>
            {item.title} - <span><Link to={'details'} state={{...item}}>details</Link></span>
        </div>
        )
     }
