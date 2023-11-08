
import Loading from "../../component/Loading/Loading";
import useAllSubmittedAssignment from "../../hooks/useAllSubmittedAssignment/useAllSubmittedAssignment";
import useBackground from "../../hooks/useBackground/useBackground";
import MyAssignmentRow from "../../component/MyAssignmentRow/MyAssignmentRow";
import useAuth from "../../hooks/useAuth/useAuth";


const MyAssignment = () => {
    const { user } = useAuth()
    const currentUserEmail = user?.email
    console.log(currentUserEmail);
    const { bgRightCorner } = useBackground()
    const { data: allSubmittedAssignment, isLoading, refetch } = useAllSubmittedAssignment();

    const filteredMyAssignment = allSubmittedAssignment && allSubmittedAssignment.filter(item => item.examineeEmail === currentUserEmail);
    console.log(filteredMyAssignment, isLoading);

    return (
        <div style={bgRightCorner}>
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold text-center pb-3 text-blue-900">My Assignments</h2>
                <div className="overflow-x-auto ">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="outline outline-slate-200">
                            <tr className="text-base text-blue-800 px-0 ">
                                <th >Assignment Name</th>
                                <th className="md:px-0">Assignment Mark</th>
                                <th className="md:px-0">Obtain marks</th>
                                <th>Status</th>
                                <th className="w-80">Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading ? (
                                <Loading></Loading>
                            ) :
                                (
                                    filteredMyAssignment.map((myAssignment) => (
                                        <MyAssignmentRow key={myAssignment._id} myAssignment={myAssignment} refetch={refetch} />
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

export default MyAssignment;