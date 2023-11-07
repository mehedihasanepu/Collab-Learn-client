import SubmittedAssignmentRow from "../../component/SubmittedAssignmentRow/SubmittedAssignmentRow";
import Loading from "../../component/Loading/Loading";
import useAllSubmittedAssignment from "../../hooks/useAllSubmittedAssignment/useAllSubmittedAssignment";
import useBackground from "../../hooks/useBackground/useBackground";

const SubmittedAssignment = () => {
    const { bgLeftCorner } = useBackground()
    const { data: allSubmittedAssignment, isLoading, refetch } = useAllSubmittedAssignment();

    const filteredAllSubmittedAssignment = allSubmittedAssignment && allSubmittedAssignment.filter(item => item.status === 'Pending');
    console.log(filteredAllSubmittedAssignment, isLoading);

    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto">
                <div className="overflow-x-auto ">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="outline outline-slate-200">
                            <tr className="text-base text-blue-800 px-0 ">
                                <th >Assignment Name</th>
                                <th className="px-0 ">Assignment Mark</th>
                                <th>Examinee name</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <Loading></Loading>
                            ) :
                                (
                                    filteredAllSubmittedAssignment.map((assignment) => (
                                        <SubmittedAssignmentRow key={assignment._id} assignment={assignment} refetch={refetch} />
                                    ))
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SubmittedAssignment;