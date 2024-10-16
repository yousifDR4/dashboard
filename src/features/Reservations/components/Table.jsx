/* eslint-disable react/prop-types */
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import Form from "./Form";
export default function Table({
  headers,
  data,
  headerKeyMap,
  toggleForm,
  open,
  CheckboxForms,
  deleteItem,
  pagaination,
  limit,
  offset,
}) {
  const table = useRef(null);
  const section = useRef(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortedData, setSortedData] = useState(data);
  const [checkboxFormsData, setCheckboxFormsData] = useState({});
  const [isCheckboxFormsOpen, setCheckboxFormsOpen] = useState(false);
  // useLayoutEffect(() => {
  //   if (table.current.offsetWidth < 800) {
  //     if (table.current !== null) {
  //       table.current.style.width = "auto";
  //       table.current.style.width = 800 + "px";
  //     }
  //   }
  //   window.addEventListener("resize", () => {});
  // }, []);
  useLayoutEffect(() => {
    setSortedData(data);
  }, [data]);

  const handleSort = (header) => {
    const isCurrentlySorted = headers[header]?.sorted || false;
    const sorted = [...sortedData].sort((a, b) => {
      const key = headerKeyMap[header];

      if (
        key !== "AttendanceTime" &&
        key !== "isActive" &&
        key !== "isCancelled"
      ) {
        return isCurrentlySorted
          ? a[key].toLowerCase() > b[key].toLowerCase()
            ? -1
            : 1
          : a[key].toLowerCase() > b[key].toLowerCase()
          ? 1
          : -1;
      } else if (key === "AttendanceTime") {
        let [, monthDay, yearAtTime] = a[key].split(", ");
        let [year, time] = yearAtTime.split(" at ");

        const date1 = new Date(`${monthDay} ${year} ${time}`);
        [, monthDay, yearAtTime] = b[key].split(", ");
        [year, time] = yearAtTime.split(" at ");

        const date2 = new Date(`${monthDay} ${year} ${time}`);
        return isCurrentlySorted
          ? date1 > date2
            ? -1
            : 1
          : date1 > date2
          ? 1
          : -1;
      } else if (key === "isActive" || key === "isCancelled") {
        return isCurrentlySorted
          ? a[key] > b[key]
            ? -1
            : 1
          : a[key] > b[key]
          ? 1
          : -1;
      }
    });
    setSortedData(sorted);
    headers[header].sorted = !isCurrentlySorted; // Update sorting state for the header
  };

  const toggleCheckboxForms = () => {
    setCheckboxFormsOpen(!isCheckboxFormsOpen);
  };

  const setAdddataData = () => {
    // Logic to prepare data for adding a data can go here
  };
  const item2 = (data, key) => {
    if (key !== "Is Active" && key !== "Is Cancelled") {
      return data;
    } else if (key === "Is Active") {
      return data ? "Active" : "Inactive";
    } else if (key === "Is Cancelled") {
      return data ? "Cancelled" : "Not Cancelled";
    }
  };
  const pagainationData = useMemo(() => {
    const arr = [];
    if (sortedData?.length > 0) {
      for (let i = offset; i < offset + limit; i++) {
        if (sortedData[i]) {
          arr.push(sortedData[i]);
        } else break;
      }
      console.log(arr);
      return arr;
    } else {
      return [];
    }
  }, [sortedData, offset]);
  return (
    <div className="overflow-x-auto bg-white rounded-2xl  border-2 border-solid boreder-[#C8CBD9] shadow-lg md:px-5">
      <section
        className="h-fit pl-5 pt-5 mb-5 flex space-x-10 w-full justify-between"
        ref={section}
      >
        <span className="w-fit">
          <p className="font-semibold text-xl mb-1">Reservations</p>
          <p>Display and Modify Reservations </p>
        </span>
        <div className="flex-shrink-0 content-center flex">
          <button
            className="mr-10 mt-2 flex flex-grow items-center space-x-1 rounded-full"
            onClick={() => {
              if (selectedRows.length > 0) toggleForm();
            }}
          >
            <div className="items-center flex hover:bg-gray-200 rounded-full h-10 px-1">
              <span>edit</span>
              <img src="edit.png" className="cursor-pointer w-6 h-6" alt="" />
            </div>
          </button>
          <button
            className="mt-2 flex flex-grow items-center space-x-1"
            onClick={() => {
              const keys = Object.keys(checkboxFormsData);
              if (Object.keys(checkboxFormsData).length > 0) {
                for (let i = 0; i < keys.length; i++) {
                  // delete data
                }
              }
            }}
          >
            <div className="items-center flex hover:bg-gray-200 rounded-full h-10 px-1">
              <span>Delete</span>
              <img src="delete.svg" className="cursor-pointer w-6 h-6" alt="" />
            </div>
          </button>
          <button
            onClick={() => {
              setAdddataData();
              toggleForm();
            }}
            className="bg-[#5A6ACF] flex-grow self-center flex justify-center items-center ml-24 text-white text-nowrap rounded-lg text-center w-44 px-4 pt-[px] h-12"
          >
            Add data to Restaurant
          </button>
        </div>
      </section>

      <table className=" " ref={table}>
        <thead className="bg-[#FCFCFD] border-y-2 border-solid border-[#EAECF0]">
          <tr>
            {Object.keys(headers).map((header, index) => (
              <th key={index} className="px-10 py-3">
                {header !== "" && header !== "Action" ? (
                  <div className="flex justify-center">
                    {header}
                    <img
                      src="/down.svg"
                      alt=""
                      className={`cursor-pointer transition-all duration-300 ${
                        headers[header].sorted ? "pr-1 -rotate-180" : "pl-1"
                      }`}
                      onClick={() => handleSort(header)}
                    />
                  </div>
                ) : (
                  <>
                    {header === "" ? (
                      <div className="flex justify-center">
                        <input
                          type="checkbox"
                          onClick={(e) => {
                            console.log(e.target.checked);
                            if (e.target.checked) {
                              setSelectedRows(pagainationData);
                              const table = document
                                .querySelector("table")
                                .querySelectorAll('input[type="checkbox"]');
                              table.forEach((checkbox) => {
                                checkbox.checked = true;
                              });
                            } else {
                              setSelectedRows([]);
                              const table = document
                                .querySelector("table")
                                .querySelectorAll('input[type="checkbox"]');
                              table.forEach((checkbox) => {
                                checkbox.checked = false;
                              });
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center">{header}</div>
                    )}
                  </>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center">
          {pagainationData.map((item, index) => (
            <tr
              key={index}
              className="border-y-2 border-solid border-[#EAECF0]"
            >
              <td className="px-6 py-3">
                <input
                  type="checkbox"
                  id={data.id}
                  onClick={(e) => {
                    if (e.target.checked) {
                      setSelectedRows((prev) => {
                        return [...prev, item];
                      });
                    } else {
                      setSelectedRows((prev) => {
                        const newData = prev.filter((i) => i.id !== item.id);
                        return [...newData];
                      });
                    }
                  }}
                />{" "}
                {index + 1}
              </td>

              {Object.keys(headerKeyMap).map((key) => (
                <td key={key} className="px-6 py-3">
                  {item2(item[headerKeyMap[key]], key)}
                </td>
              ))}
              <td className="px-6 py-3 flex">
                <button
                  className="mr-10"
                  onClick={() => {
                    // Logic to handle edit data can go here
                    toggleForm();
                  }}
                >
                  <img src="edit.png" className="w-6 h-6" alt="Edit" />
                </button>
                <button
                  onClick={async () => {
                    await deleteItem(item.id);
                  }}
                >
                  <img src="delete.svg" className="w-6 h-6" alt="Delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <Form data={selectedRows} />
      </table>
    </div>
  );
}
