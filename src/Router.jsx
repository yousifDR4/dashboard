/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";
import Register from "./features/register/Register";
import Login from "./features/login/Login";
import NavBar from "./features/navbar/NavBar";
import Accounts from "./features/accounts/Accounts";
import { fetchChart } from "./features/navbar/services/chartServices";
import ManageMenu from "./features/manageMenu/ManageMenu";
import Management from "./features/Management/Management";
import AddDishForm from "./features/Management/components/AddDishForm";
import Dishes from "./features/Management/components/Dishes";
import Settings from "./features/settings/Settings";
export const ChartQuery = {
  queryKey: ["charts", 1],
  queryFn: () => fetchChart(3),
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 60,
};

function Router({ children, queryClient }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      children: [
        {
          path: "/Dashboard",
          element: <Dashboard />,
          loader: async () => {
            try {
              return (
                queryClient.getQueryData(ChartQuery.queryKey) ??
                (await queryClient.fetchQuery(ChartQuery))
              );
            } catch (error) {
              return error;
            }
          },
        },
        {
          path: "/",
          element: <Dashboard />,
          loader: async () => {
            try {
              return (
                queryClient.getQueryData(ChartQuery.queryKey) ??
                (await queryClient.fetchQuery(ChartQuery))
              );
            } catch (error) {
              console.log(error);
              return null;
            }
          },
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
              path: "/Management",
              element: <Management />,
              children: [
                {
                  path: "/Management/:id",
                  element: <Dishes />,
                },
                {
                  path: "/Management/",
                  element: <Dishes />,
                },
                {
                  element: <AddDishForm />,
                  path: "/Management/AddDishForm",
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
  ]);

  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default Router;
