import advance from "../../assets/image/advance.png"
import assignment from "../../assets/image/assignment.png"
import teacher from "../../assets/image/teacher.png"
import student from "../../assets/image/student.png"

const FeaturesItem = () => {
    return (
        <div className="grid md:grid-cols-2 px-10 lg:px-0 lg:grid-cols-4 gap-10 pt-16">

            <div className=" flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100"><img className="w-36 p-5" src={advance} alt="" /></div>
                <div>
                    <h4 className="text-2xl font-semibold">Advanced Topics</h4>
                    <p className="text-gray-600">When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make </p>
                </div>
            </div>


            <div className=" flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100"><img className="w-36 p-4" src={assignment} alt="" /></div>
                <div>
                    <h4 className="text-2xl font-semibold">Best Assignment</h4>
                    <p className="text-gray-600">When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make </p>
                </div>
            </div>


            <div className=" flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100"><img className="w-36 p-4" src={teacher} alt="" /></div>
                <div>
                    <h4 className="text-2xl font-semibold">Expert Teachers</h4>
                    <p className="text-gray-600">When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make </p>
                </div>
            </div>


            <div className=" flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100"><img className="w-36 p-5"src={student} alt="" /></div>
                <div>
                    <h4 className="text-2xl font-semibold">500K+ Student</h4>
                    <p className="text-gray-600">When An Unknown Printer Took A Galley Offer Area Type And Scrambled To Make </p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesItem;