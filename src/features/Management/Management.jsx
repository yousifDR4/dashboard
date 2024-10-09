import { TabScroll, TabsContainer } from "./styledcomponents";
import useMangementDishes from "./hooks/useMangementDishes";

import { useNavigate, Outlet } from "react-router-dom";
const Management = () => {
  const { category, categoryArray, changeCategory, dishes } =
    useMangementDishes(3);
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col">
      <TabScroll>
        <TabsContainer $count={8} $active={category}>
          {categoryArray.length > 0 &&
            categoryArray.map((cat, index) => (
              <button
                className={`  ${
                  category === index ? "text-[#8884d8]" : "text-[#1F384C]"
                }`}
                key={cat}
                onClick={() => {
                  changeCategory(index);
                  navigate(`${cat}`);
                }}
              >
                {cat}
              </button>
            ))}
        </TabsContainer>
      </TabScroll>
      <Outlet context={[dishes]} />
    </div>
  );
};

export default Management;
