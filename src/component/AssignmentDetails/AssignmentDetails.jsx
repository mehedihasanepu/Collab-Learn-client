import { Link, useParams } from "react-router-dom";
import useAllAssignment from "../../hooks/useAllAssignment/useAllAssignment";
import Loading from "../Loading/Loading";
import useBackground from "../../hooks/useBackground/useBackground";

const AssignmentDetails = () => {
    const { bgLeftCorner } = useBackground()

    const { data: allAssignments, isLoading } = useAllAssignment();
    const { id } = useParams()
    if (isLoading) {
        return <Loading></Loading>
    }
    const assignmentDetails = allAssignments.find(assignment => assignment._id === id)
    console.log(assignmentDetails);

    const { _id, userEmail, difficulty, imgURL, marks, dueDate, title, description } = assignmentDetails;
    console.log(dueDate);

    return (

        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto py-10">
                <div className="card  bg-base-100 shadow-xl" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div>
                        <figure className="h-[60vh] "><img className="w-[100vh]" src={imgURL} alt="car!" /></figure>
                    </div>
                    <div className="max-w-3xl mx-auto ">
                        <h2 className="text-center text-3xl font-semibold">{title}</h2>
                        <div className="flex justify-between mt-5">
                            <h4 className="text-[17px] font-semibold " >Mark: <span className="text-xl font-semibold text-blue-900">{marks}</span></h4>
                            <h4 className="text-[17px] font-semibold " >Difficulty level: <span className="text-xl font-semibold text-blue-900">{difficulty}</span></h4>
                            <h4 className="text-[17px] font-semibold " >Due Date: <span className="text-xl font-semibold text-blue-900">{dueDate.slice(0, 10)}</span></h4>
                        </div>
                        <p className="mt-5"><span className="text-xl text-blue-900 font-semibold">Assignment Details: </span>{description}</p>

                        <div className="flex justify-between gap-5">
                            <Link className="card-actions  btn bg-gray-300 w-1/2 mx-auto rounded-3xl mt-8 mb-10">
                                <div className="flex items-center pt-4" >
                                    <p >Take Assignment</p>
                                    {/* <img className="w-12" src={cartIcon} alt="" /> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;