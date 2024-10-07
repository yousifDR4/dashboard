import { TabScroll, TabsContainer } from "./styledcomponents";
import useMangementDishes from "./hooks/useMangementDishes";
import Dishes from "./components/Dishes";
const Management = () => {
  const { category, categoryArray, changeCategory } = useMangementDishes();
  return (
    <header className="w-[86%] flex flex-col overflow-hidden pt-8">
      <h1 className="font-semibold text-xl pl-8"> Dishes Settings </h1>
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
};

export default Management;
