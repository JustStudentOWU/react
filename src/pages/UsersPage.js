import Users from "../components/users/Users";
import {Outlet} from "react-router-dom";

export default function UsersPage() {
    return (
        <div>
            <Users />
            <Outlet />
        </div>
        )
     }
