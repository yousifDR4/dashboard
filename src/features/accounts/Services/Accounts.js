import { getToken } from "../../../store/jwt";
import { apiInstance } from "./../../../utils/config";
export const getAllAccounts = async (restaurantId) => {
  try {
    const response = await apiInstance.get(
      `/Restaurant/accounts/${restaurantId}`,
      {
        Authorization: `Bearer ${getToken()}`,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
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
export const DeleteAccounts = async (restaurantId, userId) => {
  try {
    const response = await apiInstance.delete(
      `Restaurant/${restaurantId}/accounts/${userId}`,
      {
        Authorization: `Bearer ${getToken()}`,
      }
    );
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
