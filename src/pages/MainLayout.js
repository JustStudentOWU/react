import {Header} from "../components";
import {HomePage} from "./HomePage";
import {Outlet} from "react-router-dom";

export function MainLayout() {
    return (
        <div>
            <HomePage/>
            <Header/>
            <Outlet/>
        </div>
    )
}
