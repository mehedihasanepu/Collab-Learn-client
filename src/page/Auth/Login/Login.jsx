import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../../../assets/image/login.json";
import useBackground from "../../../hooks/useBackground/useBackground";
import googleIcon from "../../../assets/icon/google.gif"
import githubIcon from "../../../assets/icon/github.gif"
const Login = () => {
    const { bgLeft } = useBackground()


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password);
    }

    return (
        <div style={bgLeft}>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-center items-center">

                    <div className="w-[500px]">
                        <Lottie animationData={login} loop={true} />
                    </div>
                    <div className="bg-[#96c5ff74] w-[500px] rounded-3xl shadow-md shadow-blue-500/20  my-10 mx-auto py-10 px-16">
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg">Log in with</p>
                            <div className="flex w-full flex-col gap-2">
                                <button type="button" className="btn gap-2 bg-gray-5">
                                    <div className="h-9 w-9">
                                        <img src={googleIcon} alt="" />
                                    </div>
                                    <span>Login with google</span>
                                </button>
                                <button type="button" className="btn gap-2 bg-gray-5">
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