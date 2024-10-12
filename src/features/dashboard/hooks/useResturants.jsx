import { useQuery } from "@tanstack/react-query";
import { getUserRestaurants } from "../service/Owners";
const UseResturants = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countryName", "country"],
    queryFn: () => getUserRestaurants(),
    staleTime: 1000 * 60,
  });
  {
    data, error, isLoading;
  }
};

export default UseResturants;
