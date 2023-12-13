import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../../assets/image/login.json";
import useBackground from "../../../hooks/useBackground/useBackground";
import googleIcon from "../../../assets/icon/google.gif"
import githubIcon from "../../../assets/icon/github.gif"
import useAuth from "../../../hooks/useAuth/useAuth";
import { useState } from "react";
import toast from "react-hot-toast";
// import axios from "axios";
const Login = () => {
    const { bgLeft } = useBackground()
    const { singIn, googleSingIn } = useAuth()
    const location = useLocation();

    const navigate = useNavigate()
    const [loginError, setLoginError] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);

        // sing in user 
        singIn(email, password)
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location?.state : '/')

                /*    const user = { email };
                   access token 
   
                   axios.post('https://collab-learn-backend.vercel.app/jwt', user, { withCredentials: true })
                       .then(res => {
                           console.log(res.data);
                          
                       })
                       
                       */
                toast.success('Sing in SuccessFull')
            })
            .catch(error => {
                console.error(error);
                setLoginError("Invalid Email or Password")
                toast.error('Invalid Email or Password')
            })
    }



    const handleGoogleSingIn = () => {

        googleSingIn()
            .then(result => {
                console.log(result.user);

                navigate(location?.state ? location.state : "/")
                toast.success('Sing in SuccessFully')
            })
            .catch(error => {
                console.error(error);
                toast.error(error.massage)

            })
    }


    return (
        <div style={bgLeft}>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-center px-5">
                    <h4 className="text-4xl mt-0 font-semibold pt-5 flex md:hidden text-blue-gray-900 ">
                        Login
                    </h4>
                    <div className="w-[300px] md:w-[500px] ">
                        <Lottie animationData={login} loop={true} />
                    </div>
                    <div className="bg-[#96c5ff74] w-[380px] md:w-[500px] rounded-3xl shadow-md shadow-blue-500/50 my-0 md:my-10 mx-auto py-10 px-8 lg:px-16">
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg">Log in with</p>
                            <div className="flex w-full flex-col gap-2">
                                <button onClick={handleGoogleSingIn} className="btn gap-2 bg-gray-5">
                                    <div className="h-9 w-9">
                                        <img src={googleIcon} alt="" />
                                    </div>
                                    <span>Login with google</span>
                                </button>
                                <button className="btn gap-2 bg-gray-5">
                                    <div className="h-9 w-9">
                                        <img src={githubIcon} alt="" />
                                    </div>

                                    <span>Login with github</span>
                                </button>
                            </div>
                        </div>
                        <div className="divider my-6 text-xs text-content2">or continue with</div>

                        <form onSubmit={handleLogin}>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input placeholder="Your email" type="email" name="email" className="input input-bordered max-w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input placeholder="Password" type="password" name="password" className="input input-bordered max-w-full" />
                            </div>
                            <p className="text-red-600">{loginError}</p>
                            <div className="form-control mt-10">
                                <button type="submit" className="btn  lg w-full bg-gradient-to-r from-[#2205ffea] to-[#19e0ffee]  text-white">Log in</button>
                            </div>

                            <div>
                                <p className="pt-2 ">Does not have an account ? <Link to="/singUp" className="text-blue-700 font-bold ">Sing up</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;