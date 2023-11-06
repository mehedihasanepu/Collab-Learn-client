import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "../../component/UserProfile/UserProfile";
import logo from "../../assets/image/logo.png"
import "./navbar.css"

const Navbar = () => {

    // const { user, logOut } = useContext(AuthContext)
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [user, setuser] = useState(false)


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
    };



    const handleSingOut = () => {
        // logOut()
        //     .then(result => {
        //         console.log(result.user);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         toast.success('Sing Out SuccessFull')
        //     })
    }




    return (
        <div>
            <div className="max-w-screen-xl mx-auto mb-1 py-2 ">
                    <div className={`flex flex-row items-center md:px-5 justify-between `}>
                        <div>
                            <img className="w-[150px] h-[70px]" src={logo} alt="" />
                        </div>
                        <div className="lg:hidden flex">
                            <UserProfile></UserProfile>
                            <div className=" dropdown flex-row-reverse">
                                <label tabIndex={0} className="px-1">

                                    <label className="btn btn-circle swap swap-rotate" onClick={handleDropdownToggle}>

                                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                    </label>
                                </label>

                                {isDropdownOpen && (
                                    <ul tabIndex={0} className="menu dropdown-content w-60 mt-3 gap-3 z-[2] p-2 shadow relative right-1 bg-white bg-opacity-70 rounded-box flex-row-reverse">
                                        <li>
                                            <a >
                                                <NavLink to="/">Home</NavLink>
                                            </a >
                                        </li>
                                        <li>
                                            <ul className="p-2">
                                                <li>
                                                    <a>
                                                        <NavLink to="/">All Assignments</NavLink>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <NavLink to="/">Submitted  Assignments</NavLink>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a>
                                                        <NavLink to="/">My Assignments</NavLink>
                                                    </a>
                                                </li>

                                            </ul>
                                        </li>
                                        <li>
                                            <a >
                                                <NavLink to="/createAssignment">Create Assignments</NavLink>
                                            </a>
                                        </li>
                                        {
                                            user ?
                                            
                                                <button onClick={handleSingOut} className="lg:hidden text-lg font-semibold p-2 px-4 rounded-lg lg:mr-10">Sing out</button>
                                                :
                                                <>
                                                    <NavLink className="lg:hidden text-lg font-semibold p-2 px-4 rounded-lg lg:mr-10" to="/login">Login</NavLink>

                                                    <NavLink className=" lg:hidden text-lg font-semibold p-2 px-4 rounded-lg lg:mr-10" to="/singUp">Register</NavLink>
                                                </>
                                        }
                                    </ul>
                                )}
                            </div>
                        </div>

                        <div className=" hidden lg:flex lg:items-center">
                            <ul className="menu menu-horizontal pr-40">
                                <li>
                                    <a className="text-base mr-2">
                                        <NavLink to="/">Home</NavLink>
                                    </a >
                                </li>
                                <li tabIndex={0} >
                                    <details>
                                        <summary className="text-base">Assignments</summary>
                                        <ul className="p-2">
                                            <li>
                                                <a>
                                                    <NavLink className="text-center" to="/">All Assignments</NavLink>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <NavLink className="text-center" to="/">Submitted  Assignments</NavLink>
                                                </a>
                                            </li>
                                            <li>
                                                <a>
                                                    <NavLink className="text-center" to="/">My Assignments</NavLink>
                                                </a>
                                            </li>

                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <a className="text-base">
                                        <NavLink to="/createAssignment">Create Assignments</NavLink>
                                    </a>
                                </li>
                            </ul>
                            <UserProfile></UserProfile>
                            {
                                user ?
                                    <div >
                                        <button onClick={handleSingOut} className="form-control btn  ">
                                            <div className="flex items-center">
                                                <p >Sing Out</p>
                                                {/* <img className="w-10" src={singOutIcon} alt="" /> */}
                                            </div>
                                        </button>
                                    </div>

                                    :
                                    <div className="space-x-2">
                                        <Link className="btn " to="/login">
                                            <div className=" flex items-center">
                                                <button className=" text-lg">Log In</button>
                                                {/* <img className="w-12" src={logInIcon} alt="" /> */}
                                            </div>
                                        </Link>
                                        <Link className=" btn " to="/singUp">
                                            <div className=" flex items-center">
                                                <button className=" text-lg">Sing Up</button>
                                                {/* <img className="w-12" src={singInIcon} alt="" /> */}
                                            </div>
                                        </Link>
                                    </div >
                            }
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Navbar;