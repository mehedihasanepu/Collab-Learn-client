
import { NavLink } from "react-router-dom";
import bannerImg from "../../../assets/image/banner_img.png"
import useBackground from "../../../hooks/useBackground/useBackground";

const Banner = () => {
    const { bgLeftCorner } = useBackground()
    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto ">
                <div className="flex justify-between items-center ">
                    <div className="space-y-3">
                        <h3 className="text-4xl font-bold">Find Your Perfect Assignment And <br /> Improve Your Skills</h3>
                        <p className="text-xl text-gray-600">We Have <span className="text-black font-semibold">40k+</span> Online Courses & <span className="text-black font-semibold">500K+</span> Online Registered Student.</p>
                        <button className="btn btn-primary text-white text-base normal-case"><NavLink to="/allAssignment"> Explore Assignments</NavLink></button>
                    </div>


                    <div>
                        <img src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;