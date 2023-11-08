import SubmittedAssignmentRow from "../../component/SubmittedAssignmentRow/SubmittedAssignmentRow";
import Loading from "../../component/Loading/Loading";
import useAllSubmittedAssignment from "../../hooks/useAllSubmittedAssignment/useAllSubmittedAssignment";
import useBackground from "../../hooks/useBackground/useBackground";
import { Helmet } from "react-helmet";

const SubmittedAssignment = () => {
    const { bgLeftCorner } = useBackground()
    const { data: allSubmittedAssignment, isLoading, refetch } = useAllSubmittedAssignment();

    const filteredAllSubmittedAssignment = allSubmittedAssignment && allSubmittedAssignment.filter(item => item.status === 'Pending');
    console.log(filteredAllSubmittedAssignment, isLoading);

    return (
        <div style={bgLeftCorner}>
            <Helmet>
                <title>Submitted Assignment</title>
            </Helmet>
            <div className="max-w-screen-xl mx-auto">
                <h2 className=" text-2xl md:text-3xl font-semibold text-center pb-3 text-blue-900">Submitted Assignments</h2>

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