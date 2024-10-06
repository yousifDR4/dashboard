import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const activeStyle = `bg-[#E4E7F5] pt-3 pb-3 pl-5 pr-5 rounded-lg 
               cursor-pointer hover:bg-[#E4E7F5]
                  transition-all duration-200 ease`;
  const notactiveStyle = `pt-3 pb-3 pl-5 pr-5 rounded-lg 
               cursor-pointer hover:bg-[#E4E7F5]
                  transition-all duration-200 ease`;

  const location = useLocation();
  console.log("Current root:", location.pathname);

  return (
    <main className="flex h-full ">
      <nav className="bg-[#f7f5f1] h-full w-[14%] min-w-[184px] ">
        <div className="flex space-x-2  h-16 items-center place-content-center">
          <img src="/account.svg" alt="" />
          <p className="text-[#5A67BA]">GOODFOOD</p>
        </div>
        <hr style={{ border: "1px solid #C8CBD9" }} />
        <section
          className="flex flex-col "
          style={{
            margin: "11px 20px 0px 20px",
            height: "calc(100vh - 80px)",
          }}
        >
          <div
            style={{
              color: "#082431",
              fontWeight: "lighter",
              fontSize: "11px",
              paddingLeft: "20px",
              marginBottom: "12",
            }}
          >
            Menu
          </div>
          <ul className="list-none flex flex-col space-y-2 ">
            <NavLink
              className={(prob) => {
                return prob.isActive || location.pathname == "/"
                  ? activeStyle
                  : notactiveStyle;
              }}
              to={"/Dashboard"}
            >
              <li className="flex">
                <img src="/dasborad.svg" className="mr-[10px]" alt="" />
                Dashboard
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? activeStyle : notactiveStyle;
              }}
              to={"/Accounts"}
            >
              <li className="flex  ">
                <img src="/account.svg" className="mr-[10px]" alt="" />
                Accounts
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive ? activeStyle : notactiveStyle;
              }}
              to={"/ManageMenu"}
            >
              {(prob) => {
                return (
                  <li className="flex  ">
                    {prob.isActive ? (
                      <img
                        src="/Activemanue.svg"
                        className="mr-[10px]"
                        alt=""
                      />
                    ) : (
                      <img src="/managemenu.svg" className="mr-[10px]" alt="" />
                    )}
                    Manage Menu
                  </li>
                );
              }}
            </NavLink>
          </ul>
        </section>
      </nav>
      <Outlet />
    </main>
  );
}
