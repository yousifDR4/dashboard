import React, { useEffect, useMemo, useState } from "react";
import DynamicTable from "./components/Table";
import { convertTime } from "../../utils/convertTime";
import { useSelector } from "react-redux";
import useReservations from "./hooks/useReservations";

const Reservations = () => {
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const {
    data: test,
    error,
    isLoading,
  } = useReservations(restaurants[selectedRestaurant]?.id);

  const transFormDate = useMemo(() => {
    if (test) {
      console.log(test.data);

      return test.data.map((data) => {
        return {
          ...data,
          AttendanceTime: convertTime(data.AttendanceTime),
        };
      });
    }
    return [];
  }, [test]);
  console.log(transFormDate);

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

  return (
    <div className="h-full w-full pt-16 pb-16 flex justify-center overflow-y-hidden overflow-x-hidden">
      <DynamicTable
        headers={headers}
        data={transFormDate}
        headerKeyMap={headerKeyMap}
        toggleForm={toggleForm}
        open={isOpen}
      />
    </div>
  );
};

export default Reservations;
