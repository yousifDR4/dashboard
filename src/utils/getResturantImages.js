import { apiInstance } from "./config";

export const getResturantImages = async(restaurantId, images) => {
  const url= `/File/Restaurant/${restaurantId}/Image/${images}`;
  return await apiInstance.get(url);
};
