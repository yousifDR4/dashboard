import { useState } from "react";

const categoryArray = [
  "Hot Dishes",
  "Cold Dishes",
  "Soup",
  "Grill",
  "Appetizer",
  "Dessert",
  "Beverage",
];
const UseDishes = () => {
  
  const [category, setCategory] = useState(0);
  const changeCategory = (category) => {
    setCategory(category);
  };
  return { categoryArray, category, changeCategory };
};

export default UseDishes;
