import { useDispatch, useSelector } from "react-redux";
import UseResturants from "./features/navbar/hooks/useResturants";
import NavBar from "./features/navbar/NavBar";
import { Outlet, useNavigate } from "react-router-dom"; 
import { setResturants, setSelected } from "./store/restaurantsSlice";
import { useEffect } from "react";
import { getRestaurantId } from "./utils/selectedResturant";
import { getToken } from "./store/jwt";
const Index = () => {
  const { data, error, isLoading } = UseResturants();
  const navgate = useNavigate();
  const Resturants = useSelector((state) => state.restaurants.restaurants);
  const dispatchRedux = useDispatch();
  useEffect(() => {
    if (getToken() === null) {
      navgate("/login");
      return;
    }
    let id = 0;
   
    if (data) {
      const LocalRestaurantId = getRestaurantId();
      if (LocalRestaurantId === null) {
        navgate("/SelectRestaurant");
      }
      data?.data?.forEach((resturant, index) => {
        if (resturant.id === +LocalRestaurantId) {
          id = index;
        }
      });
      if (data.status === 401) {
        console.log(error);
      } else {
        console.log(data.data);
        dispatchRedux(setSelected(id));
        dispatchRedux(setResturants(data.data));
      }
    }
  }, [data]);
  return (
    <main className="flex h-full  ">
      {!isLoading && (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </main>
  );
};
export default Index;
