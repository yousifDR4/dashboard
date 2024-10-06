import React, { useEffect, useState } from "react";
import useForm from "./hooks/useForm";
import BackDrop from "./components/BackDrop";
import Table from "./components/Table";
import { getAllAccounts } from "./Services/Accounts";
import { useQuery } from "@tanstack/react-query";
function Accounts() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["table", "accounts"],
    queryFn: () => getAllAccounts(3),
    refetchOnWindowFocus: false,
  });

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
  const keys = Object.keys(headers);
  const headerKeyMap = {
    "Account Type": "AccountType",
    Email: "email",
    Name: "name",
  };

  // Data array where each object represents a row

  const [sortedUsers, setSortedUsers] = useState([]);
  useEffect(() => {
    console.log(data);
    if (data) {
      setSortedUsers(data);
    }
  }, [data]);
  const { open, toggleForm } = useForm();
  return (
    <div className="overflow-y-auto bg-white w-[86%] ">
      <main className="h-full pt-16 pb-16 flex justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Table
            headerKeyMap={headerKeyMap}
            open={open}
            keys={keys}
            setSortedUsers={setSortedUsers}
            sortedUsers={sortedUsers}
            headers={headers}
            setHeaders={setHeaders}
            toggleForm={toggleForm}
          />
        )}
      </main>
      <BackDrop isOpen={open} toggleForm={toggleForm} />
    </div>
  );
}

export default Accounts;
