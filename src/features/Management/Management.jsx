import { TabScroll, TabsContainer } from "./styledcomponents";
import useMangementDishes from "./hooks/useMangementDishes";

import { useNavigate, Outlet } from "react-router-dom";
const Management = () => {
  const { category, categoryArray, changeCategory } = useMangementDishes();
  const navigate = useNavigate();
  return (
    <header className="flex-1 flex flex-col overflow-hidden pt-8">
      <h1 className="font-semibold text-xl pl-8"> Dishes Settings </h1>
      <TabScroll>
        <TabsContainer $count={categoryArray.length} $active={category}>
          {categoryArray.map((cat, index) => (
            <button
              className={`  ${
                category === index ? "text-[#8884d8]" : "text-[#1F384C]"
              }`}
              key={cat}
              onClick={() => {
                changeCategory(index);
                navigate(`/Management/${cat}`);
              }}
            >
              {cat}
            </button>
          ))}
        </TabsContainer>
      </TabScroll>
      <Outlet />
    </header>
  );
};

export default Management;
