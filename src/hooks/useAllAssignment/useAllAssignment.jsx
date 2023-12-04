import { useQuery } from "@tanstack/react-query";


const useAllAssignment = () => {
    const { data, isLoading,  refetch } = useQuery({
        queryKey: ["assignments"],
        queryFn: async () => {
            const data = await fetch("http://localhost:5000/allAssignments",{credentials:"include"});
            return await data.json();
        },
    });
    return { data, isLoading, refetch };
};
export default useAllAssignment;