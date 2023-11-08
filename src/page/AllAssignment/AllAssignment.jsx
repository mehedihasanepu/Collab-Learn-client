
import { useEffect, useState } from "react";
import AllAssignmentsCard from "../../component/AllAssignmentsCard/AllAssignmentsCard";
import Loading from "../../component/Loading/Loading";
import useAllAssignment from "../../hooks/useAllAssignment/useAllAssignment";
import useBackground from "../../hooks/useBackground/useBackground";
import { Helmet } from "react-helmet";

const AllAssignment = () => {
    const [sortData, setSortData] = useState('All');
    const { bgLeftCorner } = useBackground()
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const [count, setCount] = useState(0)
    const [assignmentPage, setAssignmentPage] = useState([])
    const { data: allAssignments, isLoading, refetch } = useAllAssignment();
    console.log(allAssignments, isLoading);

    const numberOfPage = Math.ceil(count / itemsPerPage)

    const pages = [...Array(numberOfPage).keys()]

    useEffect(() => {
        fetch('https://collab-learn-backend.vercel.app/paginationCount')
            .then(res => res.json())
            .then(data => setCount(data.count))
    }, [])

    useEffect(() => {
        fetch(`https://collab-learn-backend.vercel.app/pagination?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setAssignmentPage(data))
    }, [currentPage, itemsPerPage])

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value)
        setItemsPerPage(val)
        setCurrentPage(0)
    }

    const handlePrev = () => {
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1)
        }
    }

    const filterAssignment = sortData === 'Hard'
        ? assignmentPage.filter(hard => hard.difficulty === 'Hard')
        : sortData === 'Medium'
            ? assignmentPage.filter(medium => medium.difficulty === 'Medium')
            : sortData === 'Easy'
                ? assignmentPage.filter(easy => easy.difficulty === 'Easy')
                : assignmentPage;

    return (
        <div style={bgLeftCorner}>
            <Helmet>
                <title>All Assignment</title>
            </Helmet>
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
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 lg:px-0 gap-5">
                                {
                                    filterAssignment.map((assignment) => (
                                        <AllAssignmentsCard key={assignment._id} assignment={assignment} refetch={refetch} />
                                    ))
                                }
                            </div>
                            <div className="flex justify-center mt-8 gap-5">
                                <button onClick={handlePrev} className="bg-blue-100 px-5 text-blue-950 text-2xl font-bold  rounded-md">&lt;</button>
                                {
                                    pages.map(page => <button
                                        key={page}
                                        className={currentPage === page ? 'bg-blue-100 px-5 text-blue-950 text-lg font-bold  rounded-md' : ''}
                                        onClick={() => setCurrentPage(page)}
                                    >
                                        {page + 1}
                                    </button>)
                                }
                                <button onClick={handleNext} className="bg-blue-100 px-5 text-blue-950 text-2xl font-bold  rounded-md">&gt;</button>
                                <select className="text-lg text-blue-950 outline-2 rounded-md p-2 outline-blue-400" value={itemsPerPage} onChange={handleItemsPerPage}>
                                    <option value="6">6</option>
                                    <option value="12">12</option>
                                </select>
                            </div>
                            
                        </div>


                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};


export default AllAssignment;