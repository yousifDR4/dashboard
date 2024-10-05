import React, { useEffect, useLayoutEffect, useRef } from "react";
function Accounts() {
  const section = useRef(null);
  const table = useRef(null);
  useEffect(() => {
    console.log(table.current.offsetWidth);
    section.current.style.width = "auto";
    section.current.style.width = table.current.offsetWidth + "px";
    window.addEventListener("resize", () => {
      section.current.style.width = "auto";
      section.current.style.width = table.current.offsetWidth + "px";
      // console.log(section.current.style.width, "section.current.style.width");
    });
  }, []);
  return (
    <div className="overflow-y-auto bg-white w-[86%] ">
      <main className="h-full pt-16 pb-16 flex justify-center">
        <div className="overflow-x-auto bg-white rounded-2xl border-2 border-solid boreder-[#C8CBD9] shadow-lg px-5">
          <section
            className="h-fit pl-5 pt-5 mb-5 flex space-x-10  w-[600px] "
            ref={section}
          >
            <span className="w-fit flex-shrink-1  " style={{ flexGrow: 1 }}>
              <p className=" font-semibold  text-xl mb-1">Resturants Users</p>
              <p className="">
                Display and Modifiy users who can Access the Admin Dashboard
              </p>
            </span>
            <div
              className="flex-shrink-0  content-center flex "
              // style={{ flexGrow: 5 }}
            >
              {" "}
              <button className="mr-10 mt-2 flex flex-grow items-center space-x-1 ">
                <span>edit</span>
                <img src="edit.png" className="w-6 h-6" alt="" />
              </button>
              <button className="mt-2 flex flex-grow items-center space-x-1">
                Delete
                <img src="delete.svg" className="w-6 h-6" alt="" />
              </button>
              <button className="bg-[#5A6ACF] flex-grow self-center flex justify-center items-center text-white text-nowrap rounded-lg text-center  w-44 px-4 pt-[px] h-12">
                Add User to Resturant
              </button>
            </div>
          </section>
          <table className="  table-auto  " ref={table}>
            <thead className="bg-[#FCFCFD] border-y-2 border-solid border-[#EAECF0]">
              <tr>
                <th className="px-10 py-3"> </th>
                <th className="px-10 py-3 flex ">
                  Account Type <img src="/down.svg" alt="" className=" pl-1" />
                </th>
                <th className="px-10 py-3 ">
                  <span className="flex">
                    Email <img src="/down.svg" alt="" className="pl-1" />
                  </span>
                </th>
                <th className="px-10 py-3">
                  <span className="flex">
                    name <img src="/down.svg" alt="" className="pl-1" />
                  </span>
                </th>
                <th className="px-10 py-3">action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="border-y-2 border-solid border-[#EAECF0]">
                <td className="px-6 py-3">
                  {" "}
                  <input type="checkbox" id="1" />1
                </td>
                <td className="px-6 py-3">Owner</td>
                <td className="px-6 py-3">t@gmial.com</td>
                <td className="px-6 py-3">yousif</td>
                <td className="px-6 py-3">
                  <button className="mr-10 mt-2">
                    <img src="edit.png" className="w-6 h-6" alt="" />
                  </button>

                  <button className="mt-2">
                    <img src="delete.svg" className="w-6 h-6" alt="" />
                  </button>
                </td>
              </tr>
              <tr className="border-y-2 border-solid border-[#EAECF0]">
                <td className="px-6 py-3">
                  {" "}
                  <input type="checkbox" name="2" id="2" /> 2
                </td>
                <td className="px-6 py-3">supporter</td>
                <td className="px-6 py-3">m@gmail.com</td>
                <td className="px-6 py-3">mazin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Accounts;
