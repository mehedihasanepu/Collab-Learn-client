import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../page/Home/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../page/Auth/Login/Login";
import Register from "../page/Auth/Register/Register";
import CreateAssignment from "../page/CreateAssignment/CreateAssignment";
import AllAssignment from "../page/AllAssignment/AllAssignment";
import AssignmentDetails from "../component/AssignmentDetails/AssignmentDetails";
import UpdateAssignment from "../page/UpdateAssignment/UpdateAssignment";




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
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'singUp',
                element: <Register></Register>
            },
            {
                path: 'createAssignment',
                element: <CreateAssignment></CreateAssignment>
            },
            {
                path: 'allAssignment',
                element: <AllAssignment></AllAssignment>
            },
            {
                path: 'assignmentDetails/:id',
                element:<AssignmentDetails></AssignmentDetails>
            },
            {
                path:'updateAssignment/:id',
                element:<UpdateAssignment></UpdateAssignment>
            }
        ]
    },
]);


export default router;