import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { getCities } from "../service/CountriesAPI";
const useCities = (countryName) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["city for countryName:", countryName],
    queryFn: () => getCities(countryName),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  });

  return { isLoading, error, data };
};

export default useCities;
