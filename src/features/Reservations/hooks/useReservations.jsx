import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getReservationsASC,
  getReservationsDSCE,
} from "../service/Reservations";

export default function useReservations(id) {
  const { data, error, isLoading } = useQuery({
    queryKey: ["reservations:ASC", "reservations:ASC"],
    queryFn: () => getReservationsDSCE(id),
    staleTime: 1000 * 60, // 5 minutes
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  return { data, error, isLoading };
}
