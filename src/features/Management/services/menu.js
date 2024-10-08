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
