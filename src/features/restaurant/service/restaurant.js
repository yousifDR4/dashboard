import { getToken } from "../../../store/jwt";
import { apiInstance } from "./../../../utils/config";
export const updateRestaurant = async (restaurantId, values) => {
  await apiInstance
    .put(`/Restaurant/${restaurantId}`, values, {
      
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.error("Error updating restaurant:", error);
      throw new Error(error, { cause: error });
    });
};
