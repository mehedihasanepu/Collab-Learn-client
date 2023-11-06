import { useState } from "react";
import useBackground from "../../hooks/useBackground/useBackground";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lottie from "lottie-react";
import createAssignment from "../../assets/image/create_Assignment.json";
import axios from "axios";
import Swal from "sweetalert2";

const CreateAssignment = () => {
    const { bgLeftCorner } = useBackground()
    const [startDate, setStartDate] = useState(new Date());
    const [difficulty, setDifficulty] = useState('');


    const handleCreateAssignment = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const title = form.get("title");
        const imgURL = form.get("imgURL");
        const marks = form.get("marks");
        const description = form.get("description");
        const createAssignment = { title, imgURL, marks, difficulty, startDate, description };
        console.log(createAssignment);
        axios.post('http://localhost:5000/allAssignments', createAssignment)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment added successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    e.target.reset();
                }

            })
    }





    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto ">
                <div className="relative flex flex-col rounded-xl  text-center bg-clip-border pt-5 pb-16 text-gray-700 shadow-none">

                    <h4 className="text-4xl mt-10  font-semibold text-blue-gray-900 ">
                        Create Assignment
                    </h4>
                    <div className="flex justify-center items-center gap-10">
                        <div className="w-[500px]">
                            <Lottie animationData={createAssignment} loop={true} />;
                        </div>
                        <div className="bg-[#96c5ff29] w-[600px] rounded-3xl shadow-md shadow-blue-500/20 px-10 mt-10 mx-auto">
                            <form onSubmit={handleCreateAssignment} className=" py-10 mb-2">
                                <div className="mb-4 flex flex-col gap-6">

                                    {/* title */}
                                    <div className="relative w-full min-w-[200px]">
                                        <input
                                            type="text"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                                            placeholder=" "
                                            name="title"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Title
                                        </label>
                                    </div>


                                    {/* imgURL */}
                                    <div className="relative  w-full min-w-[200px]">
                                        <input
                                            type="text"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                                            placeholder=" "
                                            name="imgURL"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Image URL
                                        </label>
                                    </div>



                                    {/* marks */}

                                    <div className="relative  w-full min-w-[200px]">
                                        <input
                                            type="text"
                                            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
                                            placeholder=" "
                                            name="marks"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Marks
                                        </label>
                                    </div>




                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text">Assignment Difficulty Level</span>
                                        </label>
                                        <select className="select select-bordered"

                                            onChange={(e) => setDifficulty(e.target.value)}
                                        >
                                            <option disabled selected>Pick one</option>
                                            <option>Easy</option>
                                            <option>Medium</option>
                                            <option>Hard</option>
                                        </select>
                                    </div>
                                    <label className="label">
                                        <span className="label-text">Assignment Due Date</span>
                                    </label>
                                    <DatePicker className="h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)} />





                                    {/* Description */}
                                    <div className="relative w-full min-w-[200px]">
                                        <textarea

                                            className="peer textarea textarea-bordered h-full w-full rounded-md border border-blue-gray-200 border-t-transparent  px-3 py-4 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder=" "
                                            name="description"
                                        />
                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                            Description
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="mt-6 block w-3/4 mx-auto select-none rounded-lg bg-gradient-to-r from-[#2205ff] to-[#19e0ffd8] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="submit"
                                    data-ripple-light="true"
                                >
                                    Create Assignment
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;