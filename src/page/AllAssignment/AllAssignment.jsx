
import AllAssignmentsCard from "../../component/AllAssignmentsCard/AllAssignmentsCard";
import Loading from "../../component/Loading/Loading";
import useAllAssignment from "../../hooks/useAllAssignment/useAllAssignment";
import useBackground from "../../hooks/useBackground/useBackground";

const AllAssignment = () => {
    const { bgLeftCorner } = useBackground()
    const { data: allAssignments, isLoading } = useAllAssignment();
    console.log(allAssignments, isLoading);
    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto py-10">
                <div >
                    {isLoading ? (
                        <Loading></Loading>
                    ) :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                allAssignments.map((assignment) => (
                                    <AllAssignmentsCard key={assignment._id} assignment={assignment} />
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllAssignment;