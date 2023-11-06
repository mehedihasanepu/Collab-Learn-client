import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar"
import './main-layout.css'
import Footer from "../shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;