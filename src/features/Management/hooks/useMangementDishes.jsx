import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getMenu } from "../services/menu";

const useMangementDishes = (restarantId) => {
  const [categoryArray, setCategoryArray] = useState([]);
  const [dishes, setDishes] = useState({});
  const { data, error, isLoading } = useQuery({
    queryKey: ["dishes", "category"],
    queryFn: () => getMenu(restarantId),
    staleTime: 1000 * 60,
  });
  const [category, setCategory] = useState(0);
  const changeCategory = (category) => {
    setCategory(category);
  };
  const map = {};

  useEffect(() => {
    if (data) {
      data.forEach((element) => {
        if (element.categoryName) {
          if (map[element.categoryName]?.length > 0) {
            map[element.categoryName].push(element);
          } else {
            map[element.categoryName] = [];
            map[element.categoryName].push(element);
          }
        } else {
          if (map["no category"]?.length > 0) {
            map["no category"].push(element);
          } else {
            map["no category"] = [];
            map["no category"].push(element);
          }
        }
      });
      console.log(map);
      setDishes(map);
      setCategoryArray(Object.keys(map));
    }
    if (error) {
      console.log(error);
    }
  }, [data]);
  return { isLoading, error, dishes, categoryArray, category, changeCategory };
};

export default useMangementDishes;
