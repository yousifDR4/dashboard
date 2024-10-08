import { TabScroll, TabsContainer } from "./styledcomponents";
import useMangementDishes from "./hooks/useMangementDishes";

import { useNavigate, Outlet } from "react-router-dom";
const Management = () => {
  const { category, categoryArray, changeCategory } = useMangementDishes();
  const navigate = useNavigate();
  return (
      <div className=" flex flex-col">
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
    </div>
  );
};

export default Management;
