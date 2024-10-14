import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../service/CountriesAPI";
const useContries = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["countryName", "country"],
    queryFn: () => getCountries(),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, data };
};

export default useContries;
