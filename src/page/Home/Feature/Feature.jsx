import useBackground from "../../../hooks/useBackground/useBackground";
import FeaturesItem from "../../../component/FeaturesItem/FeaturesItem";

const Feature = () => {
    const { bgRightCorner } = useBackground()
    return (

        <div style={bgRightCorner}>
            <div className="max-w-screen-xl mx-auto pt-20">
                <div className="max-w-lg md:max-w-xl lg:max-w-fit px-5 md:px-0 mx-auto">
                    <h3 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold ">SOME GREAT FEATURES OF COLLAB LEARN</h3>
                    <p className="text-center text-gray-600 pt-8">Take The Next Step Toward Your Personal And Professional Goals With Collab Learn</p>
                </div>
                <FeaturesItem></FeaturesItem>


            </div>
        </div>
    );
};

export default Feature;