import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import singUp from "../../../assets/image/singup.json";
import useBackground from "../../../hooks/useBackground/useBackground";
import googleIcon from "../../../assets/icon/google.gif"
import githubIcon from "../../../assets/icon/github.gif"
import { useState } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";



const Register = () => {
    const { bgRight } = useBackground()
    const [registerError, setRegisterError] = useState('');
    const { createUser, googleSingIn } = useAuth()
    const navigate = useNavigate()


    const handleSingUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name")
        const PhotoURL = form.get("photoURL")
        const email = form.get("email")
        const password = form.get("password")
        const accepted = form.get("checked")
        console.log(name, PhotoURL, email, password, accepted);





        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least 1 uppercase character');
            return;
        }
        else if (!/[!@#$%^&*()_\-+=[\]{}|\\;:'"<>,.?/]/.test(password)) {
            setRegisterError('Password should have one special character');
            return;
        }
        else if (!accepted) {
            setRegisterError("Please accept out terms and conditions");
            return;
        }

        setRegisterError('')


        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: PhotoURL
                })
                navigate("/")
                window.location.reload();
                toast.success('Sing Up SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })
    }



    const handleGoogleSingIn = () => {

        googleSingIn()
            .then(result => {
                navigate("/")
                console.log(result.user);
                toast.success('Sing Up SuccessFull')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div style={bgRight}>
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-center items-center">
                    <div className="bg-[#96c5ff74] w-[500px] rounded-3xl shadow-md shadow-blue-500/20  mt-10 mx-auto py-10 px-16">
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-lg">Sing Up with</p>
                            <div className="flex w-full flex-col gap-2">
                                <button onClick={handleGoogleSingIn} className="btn gap-2 bg-gray-5">
                                    <div className="h-9 w-9">
                                        <img src={googleIcon} alt="" />
                                    </div>
                                    <span>Sign up with google</span>
                                </button>
                                <button type="button" className="btn gap-2 bg-gray-5">
                                    <div className="h-9 w-9">
                                        <img src={githubIcon} alt="" />
                                    </div>

                                    <span>Sign up with github</span>
                                </button>
                            </div>
                        </div>
                        <div className="divider my-6 text-xs text-content2">or continue with</div>

                        <form onSubmit={handleSingUp}>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input placeholder="Your name" type="text" name="name" className="input input-bordered max-w-full" />
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input placeholder="URL" type="text" name="photoURL" className="input input-bordered max-w-full" />
                            </div>
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

                            <div className="flex items-center mt-2">
                                <input className="h-4 w-4" type="checkbox" name="checked" />
                                <label className="pl-2">Accept <a className="text-blue-500 cursor-pointer">terms and conditions</a></label>
                            </div>
                            <p className="text-red-600">{registerError}</p>

                            <div className="form-control mt-10">
                                <button type="submit" className="btn  lg w-full bg-gradient-to-r from-[#2205ffea] to-[#19e0ffee]  text-white">Sing Up</button>
                            </div>


                            <div>
                                <p className="pt-2 ">Already have an account? <Link to="/login" className="text-blue-700 font-bold ">Login</Link> </p>
                            </div>
                        </form>
                    </div>
                    <div className="w-[500px]">
                        <Lottie animationData={singUp} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;