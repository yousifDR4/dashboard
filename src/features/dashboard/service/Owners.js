import { getToken } from "../../../store/jwt";
import { apiInstance } from "./../../../utils/config";
export const getUserRestaurants = async () => {
  try {
    console.log(getToken());

    const response = await apiInstance.get(`/Owners`, {
      Authorization: `Bearer ${getToken()}`,
    });
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};
