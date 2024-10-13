import { TabScroll, TabsContainer } from "./styledcomponents";
import useMangementDishes from "./hooks/useMangementDishes";
import { useNavigate, Outlet, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Management = () => {
  const selectedRestaurant = useSelector((state) => state.restaurants.selected);
  const restaurants = useSelector((state) => state.restaurants.restaurants);
  const restaurantsId = restaurants[selectedRestaurant]?.id;
  const { id } = useParams();
  let catgoryeName = id ? id : "";
  console.log(restaurantsId);
  const { category, categoryArray, changeCategory, dishes } =
    useMangementDishes(restaurantsId);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col">
      <TabScroll>
        <TabsContainer $count={8} $active={category}>
          {categoryArray.length > 0 &&
            catgoryeName === "" &&
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
          {categoryArray.length > 0 &&
            catgoryeName !== "" &&
            categoryArray.map((cat, index) => {
              if (cat === catgoryeName && index !== category) {
                changeCategory(index);
              }
              return (
                <button
                  className={`  ${
                    cat === catgoryeName ? "text-[#8884d8]" : "text-[#1F384C]"
                  }`}
                  key={cat}
                  onClick={() => {
                    changeCategory(index);
                    navigate(`${cat}`);
                  }}
                >
                  {cat}
                </button>
              );
            })}
        </TabsContainer>
      </TabScroll>
      <Outlet
        context={[
          dishes,
          categoryArray.map((cat) => {
            if (cat !== "no category") {
              return {
                foodCategoryId: dishes[cat][0].foodCategoryId,
                categoryName: dishes[cat][0].categoryName,
              };
            }
            return null;
          }),
        ]}
      />
    </div>
  );
};
export default Management;
