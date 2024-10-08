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
    <main className="pt-6 h-full  ">
      <div className="overflow-y-auto h-[75vh]">
      <h1 className="text-3xl font-semibold">Dishes</h1>
      <div className="h-6"></div>
      <section
        className="w-full px-4   gap-y-3 grid gap-x-4 grid-cols-[repeat(auto-fit,minmax(min(100%,26ch),1fr))] lg:grid-cols-[repeat(auto-fill,minmax(221px,1fr))]"
      >
        <AddDishCard />
        {cardes}
      </section>
      </div>
    </main>
  );
}

export default Dishes;
