import {useNavigate} from "react-router-dom";
import {urls} from "../constants";

export function Header() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(urls.users)}>users</button>
            <button onClick={()=>navigate(urls.posts)}>posts</button>
        </div>
    )
}
