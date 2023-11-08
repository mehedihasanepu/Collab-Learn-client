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
import SubmittedAssignment from "../page/SubmittedAssignment/SubmittedAssignment";
import GiveMark from "../page/GiveMark/GiveMark";
import MyAssignment from "../page/MyAssignment/MyAssignment";
import PrivateRoute from "./PrivateRoute/PrivateRoute";




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
                element: <PrivateRoute>
                    <CreateAssignment></CreateAssignment>
                </PrivateRoute>
            },
            {
                path: 'allAssignment',
                element: <AllAssignment></AllAssignment>
            },
            {
                path: 'assignmentDetails/:id',
                element: <PrivateRoute>
                    <AssignmentDetails></AssignmentDetails>
                </PrivateRoute>
            },
            {
                path: 'updateAssignment/:id',
                element: <PrivateRoute>
                    <UpdateAssignment></UpdateAssignment>
                </PrivateRoute>
            },
            {
                path: 'submittedAssignment',
                element: <PrivateRoute>
                    <SubmittedAssignment></SubmittedAssignment>
                </PrivateRoute>
            },
            {
                path: 'submittedAssignment/:id',
                element: <GiveMark></GiveMark>
            },
            {
                path: "myAssignment",
                element: <PrivateRoute>
                    <MyAssignment></MyAssignment>
                </PrivateRoute>

            }
        ]
    },
]);


export default router;