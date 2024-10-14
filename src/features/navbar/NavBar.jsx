import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
const activeStyle = `justify-center  py-2 px-2   flex bg-[#E4E7F5] rounded-lg 
             cursor-pointer hover:bg-[#E4E7F5]
                transition-all duration-200 ease `;
const notactiveStyle = `justify-center  flex py-2 px-2 rounded-lg 
             cursor-pointer hover:bg-[#E4E7F5]
                transition-all duration-200 ease`;
export default function NavBar() {
  const location = useLocation();
  console.log("Current root:", location.pathname);

  return (
    <nav className="bg-[#f7f5f1] h-full  md:min-w-[184px]  ">
      <div className="flex space-x-2  h-16 items-center place-content-center">
        <img src="/account.svg" alt="" />
        <p className="text-[#5A67BA] hidden md:block">GOODFOOD</p>
      </div>
      <hr style={{ border: "1px solid #C8CBD9" }} />
      <section
        style={{
          height: "calc(100vh - 80px)",
        }}
        className="mt-2 mx-2 md:mt-3 md:mx-5"
      >
        <div
          style={{
            color: "#082431",
            fontWeight: "lighter",
            fontSize: "11px",
            paddingLeft: "20px",
            marginBottom: "12",
          }}
          className="hidden md:block my-2"
        >
          Menu
        </div>
        <ul className="list-none flex flex-col space-y-2 gap-5 md:gap-0 ">
          <li>
            <NavLink
              className={(prob) => {
                return prob.isActive || location.pathname == "/"
                  ? activeStyle
                  : notactiveStyle;
              }}
              to={"/Dashboard"}
            >
              <img src="/dasborad.svg" className="md:mr-[10px]" alt="" />
              <span className="flex-1 hidden md:block"> Dashboard </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? activeStyle : notactiveStyle;
              }}
              to={"/Accounts"}
            >
              <img src="/account.svg" className="md:mr-[10px]" alt="" />
              <span className="flex-1 hidden md:block"> Accounts </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => {
                return isActive ? activeStyle : notactiveStyle;
              }}
              to={"/Menu"}
            >
              {(prob) => {
                return (
                  <>
                    {prob.isActive ? (
                      <img
                        src="/Activemanue.svg"
                        className="md:mr-[10px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src="/managemenu.svg"
                        className="md:mr-[10px]"
                        alt=""
                      />
                    )}
                    <span className="flex-1 hidden md:block"> Menu </span>
                  </>
                );
              }}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(prop) => {
                return prop.isActive ||
                  location.pathname === "/Management/Restaurant"
                  ? activeStyle
                  : notactiveStyle;
              }}
              to={"/Management/ProductsManagment"}
            >
              {(prob) => {
                return (
                  <>
                    {prob.isActive ||
                    location.pathname === "/Management/Restaurant" ? (
                      <img
                        src="/settingsactive.svg"
                        className="md:mr-[10px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src="/settings.svg"
                        className="md:mr-[10px]"
                        alt=""
                      />
                    )}
                    <span className="flex-1 hidden md:block"> Management </span>
                  </>
                );
              }}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(prop) => {
                return prop.isActive || location.pathname === "/Reservations"
                  ? activeStyle
                  : notactiveStyle;
              }}
              to={"/Reservations"}
            >
              {(prob) => {
                return (
                  <>
                    {prob.isActive ? (
                      <img
                        src="/activeFood.svg"
                        className="md:mr-[10px]"
                        alt=""
                      />
                    ) : (
                      <img
                        src="/foodorder.svg"
                        className="md:mr-[10px]"
                        alt=""
                      />
                    )}
                    <span className="flex-1 hidden md:block">
                      {" "}
                      Reservations{" "}
                    </span>
                  </>
                );
              }}
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}
