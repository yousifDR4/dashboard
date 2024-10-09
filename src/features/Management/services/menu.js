import { getToken } from "../../../store/jwt";
import { apiInstance } from "../../../utils/config";
export const Addmenu = async (body, restaurantId) => {
  console.log(body);

  const response = await fetch(
    `http://localhost:5070/Restaurant/${restaurantId}/menue`,
    {
      body: body,
      method: "POST",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return await response.json();
};
export const fetchFile = async (restaurantId, ImageName) => {
  try {
    await apiInstance.get(`Restaurant/${restaurantId}/Image/${ImageName}`);
  } catch (err) {
    console.log(`Error while fetching file: ${err}`);
    return err;
  }
};
export const getMenu = async (restaurantId) => {
  return (await apiInstance.get(`/Menu/resturant/${restaurantId}`)).data;
};
