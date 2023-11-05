import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar"

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
        </div>
    );
};

export default MainLayout;