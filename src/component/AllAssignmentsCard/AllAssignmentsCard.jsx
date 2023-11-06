import { Link } from "react-router-dom";

const AllAssignmentsCard = ({ assignment }) => {
    const { _id, userEmail, difficulty, imgURL, marks,  title} = assignment;
    console.log(userEmail);
    return (
        <div>
            <div className="drop-shadow-2xl w-96 ">
                <div className="card glass bg-stone-50 bg-opacity-70">
                    <figure className=""><img className="h-60 w-full rounded-t-2xl " src={imgURL} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl ">{title}</h2>
                        <div className="flex justify-between items-center">
                            <h4 className="text-[17px] font-medium " >Mark: <span className="text-xl font-semibold text-blue-900">{marks}</span></h4>
                            <h4 className="text-[17px]  " >Difficulty level: <span className="text-xl font-semibold text-blue-900">{difficulty}</span></h4>
                        </div>
                        <div className="">

                            <Link to={`/assignmentDetails/${_id}`} className="card-actions btn font-medium text-black bg-blue-50 border-x-slate-300 border-t-stone-300">
                                <p className="pt-5 ">View Assignment</p>
                            </Link>
                            <Link className="card-actions btn font-medium text-black bg-blue-50 border-slate-300">
                                <p className="pt-5">Update Assignment</p>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllAssignmentsCard;