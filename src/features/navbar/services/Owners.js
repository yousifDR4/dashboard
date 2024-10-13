import { getToken } from "../../../store/jwt";
import { apiInstance } from "./../../../utils/config";
export const getUserRestaurants = async () => {
  try {
    const response = await apiInstance.get(`/Owners/restaurant`, {
      Authorization: `Bearer ${getToken()}`,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
