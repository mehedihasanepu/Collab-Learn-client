import { useQuery } from "@tanstack/react-query";


const useAllSubmittedAssignment = () => {
    const { data, isLoading,  refetch } = useQuery({
        queryKey: ["submittedAssignments"],
        queryFn: async () => {
            const data = await fetch("http://localhost:5000/submittedAssignment",{credentials:"include"});
            return await data.json();
        },
    });
    return { data, isLoading, refetch };
};

export default useAllSubmittedAssignment;