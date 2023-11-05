import useBackground from "../../../hooks/useBackground/useBackground";

const Feature = () => {
    const { bgRightCorner } = useBackground()
    return (

        <div style={bgRightCorner}>
            <div className="max-w-screen-xl mx-auto pt-20">
                <h3 className="text-4xl text-center font-bold ">SOME GREAT FEATURES OF COLLAB LEARN</h3>
                <p className="text-center text-gray-600 pt-8">Take The Next Step Toward Your Personal And Professional Goals With Collab Learn</p>

                

            </div>
        </div>
    );
};

export default Feature;