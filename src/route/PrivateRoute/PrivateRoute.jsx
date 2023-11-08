/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Loading from "../../component/Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>

    }
    if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;