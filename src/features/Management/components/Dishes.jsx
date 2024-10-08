/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import AddDishCard from "./AddDishCard";
import Card from "./Card";
import Form from "./Form";
const foods = [
  "Pizza",
  "Burger",
  "Sushi",
  "Pasta",
  "Tacos",
  "Salad",
  "Steak",
  "Ice Cream",
  "Sandwich",
  "Fried Chicken",
  "Chocolate",
  "Ramen",
  "Donuts",
  "Lasagna",
  "Curry",
  "Fries",
  "Pancakes",
  "Apple Pie",
  "Spaghetti",
  "Grilled Cheese",
];

function Dishes() {
  let { id } = useParams();
  id = id ? id : null;
  console.log(id);

  const cardes = [];
  for (let i = 0; i < foods.length; i++) {
    cardes.push(<Card key={i} food={foods[i]} />);
  }
  return (
    <main className="pt-6 pl-10 pr-6 h-full overflow-y-auto mt-4">
      <h1 className="text-3xl font-semibold">Dishes</h1>
      <div className="h-6"></div>
      <section
        className="w-full h-full  gap-y-6 grid gap-x-7"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(221px, 1fr))" }}
      >
        <AddDishCard />
        {cardes}
      </section>
    </main>
  );
}

export default Dishes;
