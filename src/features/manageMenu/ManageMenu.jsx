import { useState } from "react";

function ManageMenu() {
  const [category, setCategory] = useState("Hot Dishes");
  const changeCategory = (category) => {
    setCategory(category);
  };
  return (
    <header className="w-[86%] flex flex-col px-6">
      <div className="h-9">
        <h1 className="mt-5">Jaegar Resto</h1>
      </div>
      <ul className="flex   mt-10">
        <li
          className="grid grid-cols-1 h-fit"
          onClick={() => changeCategory("Hot Dishes")}
        >
          Hot Dishes
          {category === "Hot Dishes" ? (
            <hr style={{ border: "1px solid #8884d8" }} />
          ) : (
            <hr style={{ border: "1px solid #C8CBD9" }} />
          )}
        </li>
        <div className="w-8 grid grid-cols-1 content-end">
          <div></div>
          <hr style={{ border: "1px solid #C8CBD9" }} />
        </div>
        <li
          className="grid grid-cols-1 h-fit"
          onClick={() => changeCategory("Soup")}
        >
          Soup
          {category === "Soup" ? (
            <hr style={{ border: "1px solid #8884d8" }} />
          ) : (
            <hr style={{ border: "1px solid #C8CBD9" }} />
          )}
        </li>
      </ul>
    </header>
  );
}

export default ManageMenu;
