import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar"
import './main-layout.css'

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default MainLayout;