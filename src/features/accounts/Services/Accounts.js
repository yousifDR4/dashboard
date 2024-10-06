import { getToken } from "../../../store/jwt";
import { apiInstance } from "./../../../utils/config";
export const getAllAccounts = async (restaurantId) => {
  const response = await apiInstance.get(
    `/Restaurant/accounts/${restaurantId}`,
    {
      Authorization: `Bearer ${getToken()}`,
    }
  );
  return response.data;
};
export const AddAccounts = async (restaurantId, email) => {
  const response = await apiInstance.post(
    `/Supporter`,
    {
      restaurantId: restaurantId,
      email: email,
    },
    {
      Authorization: `Bearer ${getToken()}`,
    }
  );
  return response.data;
};
