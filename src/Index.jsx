import { useDispatch, useSelector } from "react-redux";
import UseResturants from "./features/navbar/hooks/useResturants";
import NavBar from "./features/navbar/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import { setResturants, setSelected } from "./store/restaurantsSlice";
import { useEffect } from "react";
import { getRestaurantId } from "./utils/selectedResturant";
const Index = () => {
  const { data, error, isLoading } = UseResturants();
  const navgate = useNavigate();
  const Resturants = useSelector((state) => state.restaurants.restaurants);
  const dispatchRedux = useDispatch();
  useEffect(() => {
    if (Resturants.length > 0) return;
    if (data) {
      const LocalRestaurantId = getRestaurantId();
      if (LocalRestaurantId === null) {
        navgate("/SelectRestaurant");
      }
      data.forEach((resturant) => {
        if (resturant.id === getRestaurantId()) {
          dispatchRedux(setSelected(resturant.id));
        }
      });
      dispatchRedux(setResturants(data));
    }
    if (error) {
      console.log(error);
    }
  }, [data]);
  return (
    <main className="flex h-full  ">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Index;
