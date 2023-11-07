/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SubmittedAssignmentRow = ({ assignment }) => {


    const { _id, status, title, marks, examineeName } = assignment;






    return (
        <tr className="outline outline-1 outline-gray-200">
            <td >{title}</td>
            <td >{marks}</td>
            <td>{examineeName}</td>
            <td>{status}</td>
            <td className="px-0">
                <Link to={`/submittedAssignment/${_id}`} className=" btn normal-case text-black bg-blue-50 border-slate-300">
                    <p >Give Mark</p>
                </Link>
            </td>
        </tr>
    );
};

export default SubmittedAssignmentRow;