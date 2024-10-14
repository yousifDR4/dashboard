/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Register from "./features/register/Register";
import Login from "./features/login/Login";
import Accounts from "./features/accounts/Accounts";
import { fetchChart } from "./features/navbar/services/chartServices";
import ManageMenu from "./features/manageMenu/ManageMenu";
import Management from "./features/Management/Management";
import AddDishForm from "./features/Management/components/AddDishForm";
import Dishes from "./features/Management/components/Dishes";
import Settings from "./features/settings/Settings";
import EditDishForm from "./features/Management/components/EditDishForm";
import Restaurant from "./features/restaurant/Restaurant";
import EditResturantForm from "./features/restaurant/components/EditResturantForm";
import DataForm from "./features/restaurant/components/DataForm";
import LocationForm from "./features/restaurant/components/LocationForm";
import Index from "./Index";
import SelectRestaurant from "./features/selecetRestaurnt/SelectRestaurant";
import { useSelector } from "react-redux";
export const ChartQuery = (id) => ({
  queryKey: ["charts", id],
  queryFn: () => fetchChart(id),
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 60,
});
function Router({ children, queryClient }) {
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const restaurantsId = restaurants
    ? restaurants[selectedRestaurant]?.id
    : null;
  console.log(restaurantsId);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      
      children: [
        {
          path: "/Dashboard",
          element: <Dashboard />,
          loader: async () => {
            try {
              return (
                queryClient.getQueryData(ChartQuery(restaurantsId).queryKey) ??
                (await queryClient.fetchQuery(ChartQuery(restaurantsId)))
              );
            } catch (error) {
              return error;
            }
          },
        },
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/Accounts",
          element: <Accounts />,
        },
        {
          path: "/Menu",
          element: <ManageMenu />,
        },
        {
          element: <Settings />,
          path: "/Management",

          children: [
            {
              element: <Restaurant />,
              path: "/Management/Restaurant",
              children: [
                {
                  path: "/Management/Restaurant",
                  element: <EditResturantForm />,
                  children: [
                    {
                      element: <DataForm />,
                      path: "",
                    },
                    {
                      element: <DataForm />,
                      path: "/Management/Restaurant/DataForm",
                    },
                    {
                      element: <LocationForm />,
                      path: "/Management/Restaurant/LocationForm",
                    },
                  ],
                },
              ],
            },
            {
              path: "/Management/ProductsManagment",
              element: <Management />,

              children: [
                {
                  path: "/Management/ProductsManagment/:id",
                  element: <Dishes />,
                },
                {
                  path: "/Management/ProductsManagment",
                  element: <Dishes />,
                },
                {
                  element: <AddDishForm />,
                  path: "/Management/ProductsManagment/AddDishForm",
                },
                {
                  element: <EditDishForm />,
                  path: "/Management/ProductsManagment/EditDishForm",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "/Register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/SelectRestaurant",
      element: <SelectRestaurant />,
    },
  ]);

  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default Router;
