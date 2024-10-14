import { useEffect, useState } from "react";
import useForm from "./hooks/useForm";
import BackDrop from "./components/BackDrop";
import Table from "./components/Table";
import { getAllAccounts } from "./Services/Accounts";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
function Accounts() {
  const [checkboxFormsIsOpen, setCheckboxFormsIsOpen] = useState(false);
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const restaurantsId = restaurants[selectedRestaurant]?.id;
  console.log(restaurantsId);

  const [sortedUsers, setSortedUsers] = useState([]);
  const { open, toggleForm } = useForm();
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

  const { data, error, isLoading } = useQuery({
    queryKey: ["table", "accounts"],
    queryFn: () => getAllAccounts(restaurantsId),
    staleTime: 1000 * 60,
    enabled: !!restaurantsId,
    refetchOnWindowFocus: false,
  });
  console.log(error);

  // Data array where each object represents a row

  useEffect(() => {
    console.log(data);
    if (data) {
      setSortedUsers(data);
    }
  }, [data]);

  const toggleCheckboxForms = () => {
    setCheckboxFormsIsOpen(!checkboxFormsIsOpen);
  };
  return (
    <div className="overflow-y-auto bg-white w-[86%] ">
      <section className="h-full pt-16 pb-16 flex justify-center">
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
            toggleCheckboxForms={toggleCheckboxForms}
            checkboxFormsIsOpen={checkboxFormsIsOpen}
          />
        )}
      </section>
      <BackDrop
        isOpen={open}
        checkboxFormsIsOpen={checkboxFormsIsOpen}
        toggleForm={toggleForm}
        toggleCheckboxForms={toggleCheckboxForms}
      />
    </div>
  );
}

export default Accounts;
