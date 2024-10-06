import { useLayoutEffect, useRef, useState } from "react";
import Form from "./Form";
import EditUser from "./EditUser";
export default function Table({
  headers,
  keys,
  headerKeyMap,
  sortedUsers,
  setSortedUsers,
  toggleForm,
  open,
  setHeaders,
}) {
  useLayoutEffect(() => {
    if (table.current.offsetWidth < 800) {
      if (table.current !== null) {
        table.current.style.width = "auto";
        table.current.style.width = 800 + "px";
      }
    }
    window.addEventListener("resize", () => {});
  }, []);
  const section = useRef(null);
  const table = useRef(null);
  const handleSort = (header) => {
    if (header === "" || header === "Action") return; // Ignore checkbox and action columns

    const isCurrentlySorted = headers[header].sorted;
    const sortedData = [...sortedUsers].sort((a, b) => {
      const key = headerKeyMap[header];
      if (isCurrentlySorted) {
        // If already sorted, sort in descending order
        return a[key] > b[key] ? -1 : 1;
      } else {
        // If not sorted, sort in ascending order
        return a[key] > b[key] ? 1 : -1;
      }
    });

    setSortedUsers(sortedData);

    // Update sorting state for the header
    setHeaders((prev) => ({
      ...prev,
      [header]: { sorted: !isCurrentlySorted },
    }));
  };
  const [data, setDate] = useState({});
  function setAddUserData() {
    setDate({
      formType: "AddUser",
      usersEmail: sortedUsers.map((user) => user.email),
    });
  }
  function setEditUserData(type, userId) {
    console.log(type, userId);

    setDate({
      formType: "EditUser",
      userType: type,
      userId: userId,
    });
  }
  return (
    <div className="overflow-x-auto bg-white rounded-2xl border-2 border-solid boreder-[#C8CBD9] shadow-lg px-5">
      <section
        className="h-fit pl-5 pt-5 mb-5 flex space-x-10 w-[800px]"
        ref={section}
      >
        <span className="w-fit">
          <p className="font-semibold text-xl mb-1">Restaurants Users</p>
          <p>Display and Modify users who can Access the Admin Dashboard</p>
        </span>
        <div className="flex-shrink-0 content-center flex">
          <button className="mr-10 mt-2 flex flex-grow items-center space-x-1 rounded-full">
            <div className="items-center flex hover:bg-gray-200 rounded-full h-10 px-1">
              <span>edit</span>
              <img src="edit.png" className="cursor-pointer w-6 h-6" alt="" />
            </div>
          </button>
          <button className="mt-2 flex flex-grow items-center space-x-1">
            <div className="items-center flex hover:bg-gray-200 rounded-full h-10 px-1">
              <span>Delete</span>
              <img src="delete.svg" className="cursor-pointer w-6 h-6" alt="" />
            </div>
          </button>
          <button
            onClick={() => {
              setAddUserData();
              toggleForm();
            }}
            className="bg-[#5A6ACF] flex-grow self-center flex justify-center items-center ml-24 text-white text-nowrap rounded-lg text-center w-44 px-4 pt-[px] h-12"
          >
            Add User to Restaurant
          </button>
        </div>
      </section>
      <table className="table-auto" ref={table}>
        <thead className="bg-[#FCFCFD] border-y-2 border-solid border-[#EAECF0]">
          <tr>
            {keys.map((header, index) => (
              <th key={index} className="px-10 py-3">
                {header !== "" && header !== "Action" ? (
                  <div className="flex justify-center">
                    {header}
                    <img
                      src="/down.svg"
                      alt=""
                      className={`cursor-pointer transition-all duration-300 ${
                        headers[header].sorted ? "pr-1 -rotate-180" : "pl-1"
                      } `}
                      onClick={() => {
                        handleSort(header);
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center">{header}</div>
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-center">
          {sortedUsers.map((user, index) => (
            <tr
              key={user.id}
              className="border-y-2 border-solid border-[#EAECF0]"
            >
              <td className="px-6 py-3">
                <input type="checkbox" id={user.id} /> {index + 1}
              </td>
              <td className="px-6 py-3">{user.AccountType}</td>
              <td className="px-6 py-3">{user.email}</td>
              <td className="px-6 py-3">{user.name}</td>
              <td className="px-6 py-3 flex">
                <button className="mr-10">
                  <img
                    src="edit.png"
                    className="w-6 h-6"
                    alt="Edit"
                    onClick={() => {
                      setEditUserData(user.AccountType, user.id);
                      toggleForm();
                    }}
                  />
                </button>
                <button>
                  <img src="delete.svg" className="w-6 h-6" alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form isOpen={open} toggleForm={toggleForm} data={data} />
    </div>
  );
}
