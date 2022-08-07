import Postdetails from "../components/Posts/Postdetails";
import {Outlet, useLocation} from "react-router-dom";

export default function PostDetailsPage() {
    let {state} = useLocation();
    return (
        <div>
            <Outlet/>
        <Postdetails state={state}/>
        </div>
        )
     }
