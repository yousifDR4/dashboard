import { useQuery } from "@tanstack/react-query";
import { getUserRestaurants } from "../../dashboard/service/Owners";
const UseResturants = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["Resturants", "Resturants"],
    queryFn: () => getUserRestaurants(),
    staleTime: 1000 * 60,
  });
  console.log(data);
  
  return {
    data,
    error,
    isLoading,
  };
};

export default UseResturants;
