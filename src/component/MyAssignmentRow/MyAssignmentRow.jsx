/* eslint-disable react/prop-types */

const MyAssignmentRow = ({ myAssignment }) => {
    const { status, title, marks, giveMark, feedback } = myAssignment;

    return (
        <tr className="outline outline-1 outline-gray-200">
            <td >{title}</td>
            <td >{marks}</td>
            <td>{giveMark}</td>
            <td className="text-green-900">{status}</td>
            <td>{feedback}</td>

        </tr>

    );
};

export default MyAssignmentRow;