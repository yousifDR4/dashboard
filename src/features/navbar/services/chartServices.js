import { apiInstance } from "../../../utils/config";

const fetchChart = async (restaurantId) => {
  if (!restaurantId) return null;
  const data1 = apiInstance.get(
    `/Reservation/count/timePeriod/${restaurantId}`
  );

  const data2 = apiInstance.get(
    `/Reservation/count/week/cancelled/${restaurantId}`
  );
  const data3 = apiInstance.get(`/Review/count/${restaurantId}`);
  return await Promise.all([data1, data2, data3]);
};
export { fetchChart };
