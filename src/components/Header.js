import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1><Link to={'/'} className={'header-link'}>MENU</Link></h1>
            <div className={'sub-Container'}>
                <span className={'sub-content'}><Link to={'/homepage'}>Home page</Link></span>
                <span className={'sub-content'}><Link to={'/aboutpage'}>About Page</Link></span>
                <span className={'sub-content'}><Link to={'/layoutpage'}>Layout Page</Link></span>
            </div>
        </div>
        )
     }
