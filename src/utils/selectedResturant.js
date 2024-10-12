export const setRestaurantId = (RestaurantId) => {
  sessionStorage.setItem("restaurantId", RestaurantId);
};

export const getRestaurantId = () => {
  return sessionStorage.getItem("restaurantId")
    ? sessionStorage.getItem("restaurantId")
    : null;
};

export const removeRestaurantId = () => {
  sessionStorage.removeItem("restaurantId");
};
