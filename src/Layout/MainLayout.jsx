import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar"
import './main-layout.css'
import Footer from "../shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;