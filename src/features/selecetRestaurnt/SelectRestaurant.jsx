import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getRestaurantId,
  setRestaurantId,
} from "../../utils/selectedResturant";
import UseResturants from "./hooks/useResturants";
import { setResturants, setSelected } from "../../store/restaurantsSlice";

function SelectRestaurant() {
  const dispatchRedux = useDispatch();
  const { data, error, isLoading } = UseResturants();
  const Resturants = useSelector((state) => state.restaurants.restaurants);

  useEffect(() => {
    if (Resturants.length > 0) return;
    if (data) {
      console.log(data);

      dispatchRedux(setResturants(data));
    }
  }, [data]);
  console.log(Resturants);

  return <div>SelectRestaurant</div>;
}

export default SelectRestaurant;
