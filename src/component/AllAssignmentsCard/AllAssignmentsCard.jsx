import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth/useAuth";
import { useEffect } from "react";
import { motion } from "framer-motion"

const AllAssignmentsCard = ({ assignment, refetch }) => {
    const { _id, userEmail, difficulty, imgURL, marks, title } = assignment;
    console.log(userEmail);
    const { user } = useAuth()
    const currentUserEmail = user?.email
    console.log(currentUserEmail);

    const handleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                if (userEmail !== currentUserEmail) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "This Assignment is not created by you!!"
                    });
                    return;
                }
                axios.delete(`https://collab-learn-backend.vercel.app/allAssignments/${id}`)
                    .then((res) => {
                        if (res?.data?.deletedCount > 0) {
                            Swal.fire(`${title}`, "Has been Delete", "success");
                            refetch();
                        }
                    })
            }
        })
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div className="drop-shadow-2xl ">
                <motion.button whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}>

                    <div className="card glass bg-stone-50 bg-opacity-70">
                        <figure className=""><img className="h-60 w-96 rounded-t-2xl " src={imgURL} alt="car!" /></figure>
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
                                <Link to={`/updateAssignment/${_id}`} className="card-actions btn font-medium text-black bg-blue-50 border-slate-300">
                                    <p className="pt-5">Update Assignment</p>
                                </Link>
                                <button onClick={() => handleDelete(_id)} className="w-full btn font-medium text-black bg-blue-50  border-x-slate-300 border--stone-300">
                                    <p >Delete Assignment</p>
                                </button>

                            </div>
                        </div>
                    </div>
                </motion.button>

            </div>
        </div>
    );
};

export default AllAssignmentsCard;