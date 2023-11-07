import { useParams } from "react-router-dom";
import useAllAssignment from "../../hooks/useAllAssignment/useAllAssignment";
import Loading from "../Loading/Loading";
import useBackground from "../../hooks/useBackground/useBackground";
import useAuth from "../../hooks/useAuth/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const AssignmentDetails = () => {
    const { bgLeftCorner } = useBackground()
    const { user } = useAuth()
    const userName = user?.displayName

    const { data: allAssignments, isLoading } = useAllAssignment();
    const { id } = useParams()
    if (isLoading) {
        return <Loading></Loading>
    }
    const assignmentDetails = allAssignments.find(assignment => assignment._id === id)
    console.log(assignmentDetails);

    const { _id, userEmail, difficulty, imgURL, marks, dueDate, title, description } = assignmentDetails;
    console.log(difficulty);


    const handleSubmitAssignment = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const pdfLink = form.get("pdfLink");
        const quickNote = form.get("quickNote");
        const status = 'pending'
        const submitAssignment = { pdfLink, quickNote, title, marks, status, userEmail, userName };
        console.log(submitAssignment);





    }


    return (

        <div style={bgLeftCorner}>
            <div className="max-w-screen-lg mx-auto py-10">
                <div className="card  bg-base-100 shadow-xl" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <div>
                        <figure className="h-[60vh] "><img className="w-[100vh]" src={imgURL} alt="car!" /></figure>
                    </div>
                    <div className="w-[750px] mx-auto ">
                        <h2 className="text-center text-3xl font-semibold">{title}</h2>
                        <div className="flex justify-between mt-5">
                            <h4 className="text-[17px] font-semibold " >Mark: <span className="text-xl font-semibold text-blue-900">{marks}</span></h4>
                            <h4 className="text-[17px] font-semibold " >Difficulty level: <span className="text-xl font-semibold text-blue-900">{difficulty}</span></h4>
                            <h4 className="text-[17px] font-semibold " >Due Date: <span className="text-xl font-semibold text-blue-900">{dueDate.slice(0, 10)}</span></h4>
                        </div>
                        <p className="mt-5"><span className="text-xl text-blue-900 font-semibold">Assignment Details: </span>{description}</p>













                        <div className="flex justify-center my-5 gap-5">

                            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Take Assignment</button>
                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">



                                <div className="modal-box">
                                    <form onSubmit={handleSubmitAssignment} className=" py-10 mb-2">
                                        <div className="mb-4 flex flex-col gap-6">

                                            {/* title */}
                                            <div className="relative w-full min-w-[200px]">
                                                <input
                                                    type="text"
                                                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                                                    placeholder=" "
                                                    name="pdfLink"
                                                />
                                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                    Assignment PDF Drive Link
                                                </label>
                                            </div>




                                            {/* Description */}
                                            <div className="relative w-full min-w-[200px]">
                                                <textarea

                                                    className="peer textarea textarea-bordered h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                    placeholder=" "
                                                    name="quickNote"
                                                />
                                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                    Quick note
                                                </label>
                                            </div>
                                        </div>
                                        <button
                                            className="mt-6 block w-7/12 mx-auto select-none rounded-lg bg-gradient-to-r from-[#2205ff] to-[#19e0ffd8] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="submit"
                                            data-ripple-light="true"
                                        >
                                            Submit Assignment
                                        </button>
                                    </form>

                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn  btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;