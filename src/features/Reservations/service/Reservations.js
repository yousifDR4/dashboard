import { getToken } from "../../../store/jwt";
import { apiInstance } from "../../../utils/config";

export const getReservationsASC = async (id) => {
  return await apiInstance.get(`/Reservation/restaurant/${id}/ASC`, {
    Authorization: `Bearer ${getToken()}`,
  });
};
export const getReservationsDSCE = async (id) => {
  return await apiInstance.get(`/Reservation/restaurant/${id}/DESC`, {
    Authorization: `Bearer ${getToken()}`,
  });
};
