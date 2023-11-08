
import { NavLink } from "react-router-dom";
import bannerImg from "../../../assets/image/banner_img.png"
import useBackground from "../../../hooks/useBackground/useBackground";

const Banner = () => {
    const { bgLeftCorner } = useBackground()
    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto ">
                <div className="flex px-10 lg:px-0 justify-between flex-col-reverse md:flex-row items-center ">
                    <div className="space-y-3 py-5">
                        <h3 className="text-2xl lg:text-4xl font-bold">Find Your Perfect Assignment And <br className="hidden lg:flex "/> Improve Your Skills</h3>
                        <p className="md:text-base lg:text-xl text-gray-600">We Have <span className="text-black font-semibold">40k+</span> Online Courses & <span className="text-black font-semibold">500K+</span> Online Registered Student.</p>
                        <button className="btn bg-blue-200  border-2 border-blue-500 text-gray-800 text-base normal-case"><NavLink to="/allAssignment"> Explore Assignments</NavLink></button>
                    </div>


                    <div>
                        <img className="md:h-96 lg:h-full  md:w-[480px] lg:w-full " src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;