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
          path: "/Management",
          element: <Management />,
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
