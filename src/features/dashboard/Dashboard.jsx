import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import useCharts from "./hooks/useCharts";
import { useEffect, useState } from "react";
import clesses from "./Dashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SelectRestaurant from "./../selecetRestaurnt/SelectRestaurant";
import { setResturants, setSelected } from "../../store/restaurantsSlice";
import { clearUser } from "../../store/userSlice";
import { removeToken } from "../../store/jwt";
import { removeRestaurantId } from "../../utils/selectedResturant";
function Dashboard() {
  const navgate = useNavigate();
  const dispatchRedux = useDispatch();
  const [openDropdown, setOpenDropdown] = useState(false);
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);

  const {
    timePeriodChartData,
    ReviewsChartData,
    cancelledRatioChartData,
    COLORS,
  } = useCharts(restaurants[selectedRestaurant]?.id);
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
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

  return (
    <div
      className="overflow-y-auto"
      style={{
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <div className="h-16 flex items-center justify-end">
        <div className=" pr-5 flex mr-3">
          {restaurants[selectedRestaurant]?.name ? (
            restaurants[selectedRestaurant].name
          ) : (
            <div>loading</div>
          )}
          <button
            className="ml-1 relative"
            onClick={toggleDropdown}
            id="button"
          >
            <img
              src="/changeAccount.svg"
              className="mt-[2px]"
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
      <hr style={{ border: "1px solid #C8CBD9" }} />
      <p className="font-medium text-lg mb-10 mt-2 ml-10">Dashboard</p>
      <div
        className=" px-4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          height: "calc(100vh - 145px)",
          paddingBottom: "20px",
        }}
      >
        {" "}
        <div
          style={{
            borderRight: "1px solid #C8CBD9",
            paddingLeft: "20px",
            paddingBottom: 20,
          }}
        >
          <ResponsiveContainer width="100%">
            <BarChart
              data={ReviewsChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis width={42} />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="pb-5">
          <ResponsiveContainer width="100%">
            <PieChart>
              <Pie
                data={timePeriodChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                // outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {timePeriodChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            borderTop: "1px solid #C8CBD9",
            borderRight: "1px solid #C8CBD9",
            paddingLeft: "20px",
            paddingTop: "20px",
            paddingRight: "20px",
          }}
        >
          <ResponsiveContainer width="100%">
            <LineChart
              data={cancelledRatioChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cancellations"
                stroke="#FF5733"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="acceptances"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                name="Acceptances"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div
          style={{
            borderTop: "1px solid #C8CBD9",
            paddingTop: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <ResponsiveContainer width="100%">
            <LineChart
              data={cancelledRatioChartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="cancellations"
                stroke="#FF5733"
                activeDot={{ r: 8 }}
              />
              <LineChart
                type="monotone"
                dataKey="acceptances"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
                name="Acceptances"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
