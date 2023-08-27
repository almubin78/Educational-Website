import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    const {data:menu=[],isLoading:lodingWithQuery,refetch} = useQuery({
        queryKey:['menu'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/sscMcq');
            return res.json();
        }
    })
    return [menu,lodingWithQuery,refetch]
};

export default useMenu;