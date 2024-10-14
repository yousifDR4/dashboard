import { Outlet, useNavigate, NavLink, useLocation } from "react-router-dom";
import clesses from "./Settings.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiInstance } from "../../utils/config";
import { setResturants, setSelected } from "../../store/restaurantsSlice";
import { clearUser } from "../../store/userSlice";
import { removeToken } from "../../store/jwt";
import { removeRestaurantId } from "../../utils/selectedResturant";

function Settings() {
  const navgate = useNavigate();
  const dispatchRedux = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const path = useLocation().pathname;
  useEffect(() => {
    window.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(e.target.id);
      if (
        setOpenDropdown &&
        e.target.id !== "DropList" &&
        e.target.id !== "button" &&
        e.target.id !== "image"
      ) {
        setOpenDropdown(false);
      }
    });
  }, []);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  return (
    <header className="flex-1 flex flex-col overflow-hidden  ">
      <div className="min-h-16 flex items-center pl-2  justify-between">
        <h1 className="font-semibold text-xl md:pl-3">
          {path.includes("ProductsManagment")
            ? "Dishes Settings"
            : "Restaurant Settings"}
        </h1>
        <div className="h-16 flex items-center justify-end ">
          <div className=" pr-5 flex mr-3 space-x-3 mt-2 ">
            <img
              src={`${apiInstance.apiUrl}/File/Restaurant/${restaurants[selectedRestaurant]?.id}/Image/${restaurants[selectedRestaurant]?.images}`}
              className="w-8 h-8 rounded-full"
              alt=""
              onError={(e) => {
                e.target.onerror = null; // Prevents infinite loop if fallback image also fails
                e.target.src = "/fallback.webp"; // Replace with a path to your fallback image
              }}
            />
            {restaurants[selectedRestaurant]?.name ? (
              <span> {restaurants[selectedRestaurant].name}</span>
            ) : (
              <div>loading</div>
            )}

            <button
              className="ml-1 mt-1 relative"
              onClick={toggleDropdown}
              id="button"
            >
              <img
                src="/changeAccount.svg"
                className="mb-4"
                alt=""
                id="image"
              />
            </button>
            <div className="relative">
              {openDropdown && (
                <div
                  className={`fixed w-36 top-12  right-8 border-2 border-solid border-[#C8CBD9]  bg-white shadow-md rounded-md z-10 ${clesses.dropdown}`}
                  id="DropList"
                >
                  <div className={`grid grid-cols-1 px-1 gap-y-1 mt-2`}>
                    <div
                      onClick={() => {
                        dispatchRedux(setSelected(null));
                        dispatchRedux(setResturants([]));
                        dispatchRedux(clearUser());
                        removeToken();
                        removeRestaurantId();
                        navgate("/Login");
                      }}
                      className={`${clesses.div1} `}
                    >
                      Logout
                    </div>
                    <div
                      className={`${clesses.div2} `}
                      onClick={() => {
                        navgate("/SelectRestaurant");
                      }}
                    >
                      Change restaurant
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  mb-2 p-3 gap-16">
        <section className="w-[10%] min-w-[fit-content] flex-shrink-[2] py-3 px-2 bg-[#f7f5f1]">
          <ul>
            <NavLink
              className={({ isActive }) =>
                !isActive
                  ? "grid grid-cols-[20px_1fr] p-4	[column-gap:0.3rem;] grid-rows-2 rounded-md"
                  : "grid grid-cols-[20px_1fr] p-4	[column-gap:0.3rem;] grid-rows-2 mb-3 bg-[#C4C7DB] rounded-md "
              }
              to={"/Management/ProductsManagment"}
            >
              <img
                src="/restaurant.svg"
                alt="products managment"
                className=" justify-self-center self-center w-4 aspect-square"
              />
              <h3 className="text-base">Products Managment</h3>
              <p className="text-xs	col-start-2">Manage your products </p>
            </NavLink>
            <NavLink
              to={"/Management/Restaurant"}
              className={({ isActive }) =>
                !isActive
                  ? "grid mt-3 grid-cols-[20px_1fr] p-4	[column-gap:0.3rem;] grid-rows-2  rounded-md"
                  : "grid grid-cols-[20px_1fr] p-4	[column-gap:0.3rem;] grid-rows-2 bg-[#C4C7DB] rounded-md  "
              }
            >
              <img
                src="/products.svg"
                alt="restaurant profile"
                className=" justify-self-center self-center w-4 aspect-square"
              />
              <h3 className="text-base">Restaurant</h3>
              <p className="text-xs	col-start-2">Manage your restaurant</p>
            </NavLink>
          </ul>
        </section>
        <section className=" w-full flex-shrink-[1] overflow-hidden">
          <Outlet />
        </section>
      </div>
    </header>
  );
}

export default Settings;
