import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRestaurantId,
  setRestaurantId,
} from "../../utils/selectedResturant";
import UseResturants from "./hooks/useResturants";
import { setResturants, setSelected } from "../../store/restaurantsSlice";
import { apiInstance } from "../../utils/config";
import { removeToken } from "../../store/jwt";

function SelectRestaurant() {
  const dispatchRedux = useDispatch();
  const navgate = useNavigate();
  const selectedRestaurantIdFromStorag = getRestaurantId();
  console.log(selectedRestaurantIdFromStorag);

  const { data, error, isLoading } = UseResturants();
  const Resturants = useSelector((state) => state.restaurants.restaurants);

  useEffect(() => {
    if (Resturants.length > 0) return;
    if (data) {
      console.log(data);

      if (data.status === 401) {
        removeToken();
        navgate("/login");
        return;
      }
      console.log(data);

      dispatchRedux(setResturants(data.data));
    }
  }, [data]);

  const selectRestaurnat = (index) => {
    setRestaurantId(data.data[index].id);

    dispatchRedux(setSelected(index));
    navgate("/");
  };
  console.log(data);

  return (
    <section className="flex  items-center place-content-center h-[100vh] ">
      <div className="h-fit rounded shadow-md pt-6 px-10 pb-6 bg-[#f7f5f1]">
        <h1 className="text-2xl font-semibold text-center">
          Select Restaurant
        </h1>

        {error && <p>{error.message}</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          !error &&
          data?.data !== null &&
          data?.data?.map((restaurant, index) => (
            <div
              key={index}
              className={`min-w-[230px] mt-5 flex space-x-5 hover:bg-[#E4E7F5] ${
                selectedRestaurantIdFromStorag
                  ? +selectedRestaurantIdFromStorag === restaurant.id
                    ? "bg-[#E4E7F5]"
                    : ""
                  : ""
              } rounded py-3 px-3 cursor-pointer `}
              onClick={() => selectRestaurnat(index)}
            >
              <div className="pl-3">
                <img
                  src={`${apiInstance.apiUrl}/File/Restaurant/${restaurant.id}/Image/${restaurant.images}`}
                  className="w-8 h-8 rounded-full"
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop if fallback image also fails
                    e.target.src = "/fallback.webp"; // Replace with a path to your fallback image
                  }}
                />
              </div>{" "}
              <div className="justify-self-end pr-3">{restaurant.name}</div>
            </div>
          ))}
      </div>
    </section>
  );
}
export default SelectRestaurant;
