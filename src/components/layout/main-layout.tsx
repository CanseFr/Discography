import AppBar from "@mui/material/AppBar";
import {Outlet} from "react-router";
import {Footer} from "../footer";
import {TopBar} from "../top-bar";

export const MainLayout = () => {
    return (
        <>
            <TopBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}