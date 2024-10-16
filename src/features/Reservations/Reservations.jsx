import React, { useEffect, useMemo, useState } from "react";
import DynamicTable from "./components/Table";
import { convertTime } from "../../utils/convertTime";
import { useSelector } from "react-redux";
import useReservations from "./hooks/useReservations";
import { DeleteReservations } from "./service/Reservations";
import { useQueryClient } from "@tanstack/react-query";
const Reservations = () => {
  const queryClient = useQueryClient();
  const [pagination, setPagination] = useState(1);
  const limit = 10;
  const offset = limit * (pagination - 1);
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const {
    data: test,
    error,
    isLoading,
  } = useReservations(restaurants[selectedRestaurant]?.id);

  const transFormDate = useMemo(() => {
    if (test) {
      return test.data.map((data) => {
        return {
          ...data,
          AttendanceTime: convertTime(data.AttendanceTime),
        };
      });
    }
    return [];
  }, [test]);

  const [headers, setHeaders] = useState({
    "": {},
    Name: { sorted: false },
    "Attendance Time": {
      sorted: false,
    },
    "Is Active": {
      sorted: false,
    },
    "Is Cancelled": {
      sorted: false,
    },
    Action: { sorted: false },
  });

  const headerKeyMap = {
    Name: "name",
    "Attendance Time": "AttendanceTime",
    "Is Active": "isActive",
    "Is Cancelled": "isCancelled",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  const deleteItem = async (reservationId) => {
    DeleteReservations(reservationId, restaurants[selectedRestaurant]?.id)
      .then((res) => {
        if (res.status === 200) {
          queryClient
            .invalidateQueries(["reservations:ASC", "reservations:ASC"])
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const finalpage = useMemo(() => {
    if (transFormDate) {
      const length = transFormDate.length;
      console.log(length / limit);
      return Math.round(length / limit);
    }
  }, [transFormDate]);
  const renderPaginationNumbers = () => {
    let arr = [
      <h3 className="cursor-pointer" key={pagination}>
        {pagination}
      </h3>,
    ];
    for (let i = pagination + 1; i < pagination + 3 && i <= finalpage; i++) {
      arr.push(
        <h3 className="cursor-pointer" key={i} onClick={() => setPagination(i)}>
          {i}
        </h3>
      );
    }
    if (pagination < finalpage) {
      arr.push(<h3>.....</h3>);
    }
    return arr;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-full w-full pt-16 pb-16  flex flex-col justify-center  items-center overflow-y-hidden ">
      <div className="h-[700px] overflow-y-auto ">
        <DynamicTable
          headers={headers}
          data={transFormDate}
          headerKeyMap={headerKeyMap}
          toggleForm={toggleForm}
          open={isOpen}
          deleteItem={deleteItem}
          pagination={pagination}
          limit={limit}
          offset={offset}
        />
        <div className="flex justify-center space-x-3 h-12 items-center ">
          <div className="flex items-center space-x-3">
            <img
              onClick={() => {
                console.log("working");

                if (pagination !== 1) setPagination(pagination - 1);
              }}
              src="arrow.svg"
              className="w-10 h-10 cursor-pointer -rotate-180  border-solid border-[#f7f5f1] "
              alt=""
            />
            {renderPaginationNumbers()}
          </div>
          <div className="flex items-center space-x-3 ">
            <h3
              className="cursor-pointer"
              onClick={() => setPagination(finalpage)}
            >
              {" "}
              {finalpage !== pagination ? finalpage : ""}
            </h3>
            <img
              onClick={() => {
                if (finalpage > pagination) setPagination(pagination + 1);
              }}
              src="arrow.svg"
              className="w-10 h-10 cursor-pointer   border-solid border-[#f7f5f1]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
