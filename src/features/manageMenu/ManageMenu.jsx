import { useState } from "react";
import { TabsContainer, TabScroll } from "./styledcomponents";
import Dishes from "./components/Dishes";

function ManageMenu() {
  const categoryArray = [
    "Hot Dishes",
    "Cold Dishes",
    "Soup",
    "Grill",
    "Appetizer",
    "Dessert",
    "Beverage",
  ];
  const [category, setCategory] = useState(0);
  const changeCategory = (category) => {
    setCategory(category);
  };

  return (
    <header className="w-[86%] flex flex-col overflow-hidden">
      <div className="h-9 mt-4 pl-8  ">
        <input
          type="text"
          placeholder="Search for a dish"
          className="
        h-8 w-96
        outline-none border-none bg-[#F6F6FB]"
        />
      </div>
      {/* <hr style={{ marginTop: "12px", border: "1px solid #C8CBD9" }} /> */}
      <TabScroll>
        <TabsContainer $count={categoryArray.length} $active={category}>
          {categoryArray.map((cat, index) => (
            <button
              className={`  ${
                category === index ? "text-[#8884d8]" : "text-[#1F384C]"
              }`}
              key={cat}
              onClick={() => changeCategory(index)}
            >
              {cat}
            </button>
          ))}
        </TabsContainer>
      </TabScroll>
      <Dishes />
    </header>
  );
}
export default ManageMenu;
