import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../page/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../page/Auth/Login/Login";
import Register from "../page/Auth/Register/Register";
import CreateAssignment from "../page/CreateAssignment/CreateAssignment";




const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
            path:'login',
            element:<Login></Login>
            },
            {
                path:'singUp',
                element:<Register></Register>
            },
            {
                path:'createAssignment',
                element:<CreateAssignment></CreateAssignment>
            }
        ]
    },
]);


export default router;