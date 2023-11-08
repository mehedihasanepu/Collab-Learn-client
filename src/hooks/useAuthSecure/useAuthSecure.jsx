import axios from "axios";
import { useEffect } from "react";
import useAuth from "../useAuth/useAuth";



const axiosSecure = axios.create({
    baseURL: 'https://collab-learn-backend.vercel.app/',
    withCredentials: true
})
const useAuthSecure = () => {
    const { logOut } = useAuth()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        },
            error => {
                console.log('error tracked in the interceptor', error.response);
                if (error.response.status === 401 || error.response.status === 401) {

                    logOut()
                        .then(() => { })
                        .catch(error => console.error(error))
                }
            }
        )
    }, [])

    return axiosSecure
};

export default useAuthSecure;