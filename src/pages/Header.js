import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1><Link to={'/'}>Menu</Link></h1>
            <div>
                <span><Link to={'/people'}>People</Link></span>
                <span><Link to={'/planets'}>Planets</Link></span>
                <span><Link to={'/films'}>Films</Link></span>
            </div>

        </div>
    )
}
