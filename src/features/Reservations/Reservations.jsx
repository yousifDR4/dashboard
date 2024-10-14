import React, { useState } from "react";
import DynamicTable from "../../utils/Table";

const Reservations = () => {
  const [headers, setHeaders] = useState({
    "": {},
    "Account Type": {
      sorted: false,
    },
    Email: {
      sorted: false,
    },
    Name: { sorted: false },
    Action: { sorted: false },
  });

  const data = [
    { AccountType: "Admin", email: "admin@example.com", name: "Admin User" },
    { AccountType: "User", email: "user@example.com", name: "Regular User" },
    // Add more data objects as needed
  ];

  const headerKeyMap = {
    "Account Type": "AccountType",
    Email: "email",
    Name: "name",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full w-full pt-16 pb-16 flex justify-center overflow-y-hidden overflow-x-hidden">
      <DynamicTable
        headers={headers}
        data={data}
        headerKeyMap={headerKeyMap}
        toggleForm={toggleForm}
        open={isOpen}
      />
    </div>
  );
};

export default Reservations;
