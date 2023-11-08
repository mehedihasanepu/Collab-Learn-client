import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../component/Loading/Loading";
import axios from "axios";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import useAllSubmittedAssignment from "../../hooks/useAllSubmittedAssignment/useAllSubmittedAssignment";
import useBackground from "../../hooks/useBackground/useBackground";
import resultImg from "../../assets/image/result.json"

const GiveMark = () => {
    const navigate = useNavigate()
    const { bgLeftCorner } = useBackground()
    const { data: allSubmittedAssignment, isLoading } = useAllSubmittedAssignment();
    console.log(allSubmittedAssignment);



    const { id } = useParams()
    if (isLoading) {
        return <Loading></Loading>
    }
    const submittedAssignmentDetails = allSubmittedAssignment.find(submittedAssignment => submittedAssignment._id === id)
    const { _id, pdfLink, quickNote, title, marks, examineeEmail, examineeName } = submittedAssignmentDetails;
    console.log(submittedAssignmentDetails);


    const handleGivenAssignmentMark = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const giveMark = form.get("giveMark");
        const feedback = form.get("feedback");
        const status = 'Complete'
        const givenAssignmentMark = { pdfLink, quickNote, feedback, title, giveMark, marks, status, examineeEmail, examineeName };
        console.log(givenAssignmentMark);

        axios.put(`https://collab-learn-backend.vercel.app/submittedAssignment/${_id}`, givenAssignmentMark)
            .then(res => {
                console.log(res.data);

                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Mark Given successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/submittedAssignment')
                }

            })


    }




    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto ">
                <h4 className="text-4xl text-blue-900 pt-5  text-center font-semibold text-blue-gray-900 ">
                    Give Mark
                </h4>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">

                    <div >
                        <div className="w-60 lg:w-[400px]">
                            <Lottie animationData={resultImg} loop={true} />
                        </div>
                    </div>
                    <div className="bg-[#96c5ff29]  w-[380px] md:w-[650px] rounded-3xl shadow-md shadow-blue-500/20 px-10 pt-5 mx-auto text-center">
                        <hr />
                        <div className="inline-flex pt-2 items-center">
                            <p className="text-base font-semibold">PDF Link:</p>
                            <a className="link link-primary pl-2"> {pdfLink}</a>

                        </div>
                        <p className="pt-2 pb-8"> <span className="text-base font-semibold">Examinee Note: </span> {quickNote}</p>



                        <form onSubmit={handleGivenAssignmentMark} className=" pb-8 px-0 md:px-10 mb-2">
                            <div className="mb-4 flex  flex-col gap-6">

                                {/* title */}
                                <div className="relative  min-w-[200px]">
                                    <input
                                        type="text"
                                        className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                                        placeholder=" "
                                        name="giveMark"
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Mark
                                    </label>
                                </div>




                                {/* Description */}
                                <div className="relative w-full min-w-[200px]">
                                    <textarea

                                        className="peer textarea textarea-bordered h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        name="feedback"
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Feedback
                                    </label>
                                </div>
                            </div>
                            <button
                                className="mt-6 block w-7/12 mx-auto select-none rounded-lg bg-gradient-to-r from-[#19e0ffd8] to-[#2205ff] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="submit"
                                data-ripple-light="true"
                            >
                                Give Mark
                            </button>
                        </form>

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiveMark;