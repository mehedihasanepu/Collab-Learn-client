
import { useState } from "react";
import AllAssignmentsCard from "../../component/AllAssignmentsCard/AllAssignmentsCard";
import Loading from "../../component/Loading/Loading";
import useAllAssignment from "../../hooks/useAllAssignment/useAllAssignment";
import useBackground from "../../hooks/useBackground/useBackground";

const AllAssignment = () => {
    const [sortData, setSortData] = useState('All');
    const { bgLeftCorner } = useBackground()
    const { data: allAssignments, isLoading, refetch } = useAllAssignment();
    console.log(allAssignments, isLoading);

    const filterAssignment = sortData === 'Hard'
        ? allAssignments.filter(hard => hard.difficulty === 'Hard')
        : sortData === 'Medium'
            ? allAssignments.filter(medium => medium.difficulty === 'Medium')
            : sortData === 'Easy'
                ? allAssignments.filter(easy => easy.difficulty === 'Easy')
                : allAssignments;




    return (
        <div style={bgLeftCorner}>
            <div className="max-w-screen-xl mx-auto py-10">
                <h2 className="text-3xl font-semibold text-center pb-3 text-blue-900">All Assignments</h2>

                <div className="flex justify-end mr-10 mb-5">
                    <select className="select select-bordered"

                        onChange={(e) => setSortData(e.target.value)}
                    >
                        <option>All</option>
                        <option>Hard</option>
                        <option>Medium</option>
                        <option>Easy</option>
                    </select>
                </div>

                <div >
                    {isLoading ? (
                        <Loading></Loading>
                    ) :
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-0 gap-5">
                            {
                                filterAssignment.map((assignment) => (
                                    <AllAssignmentsCard key={assignment._id} assignment={assignment} refetch={refetch} />
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