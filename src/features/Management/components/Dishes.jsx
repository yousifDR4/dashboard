/* eslint-disable react/prop-types */
import { useOutletContext, useParams } from "react-router-dom";
import AddDishCard from "./AddDishCard";
import Card from "./Card";
function Dishes() {
  let { id } = useParams();
  id = id ? id : null;
  console.log(id);
  const [foods] = useOutletContext();
  console.log(foods);
  const category = id ? id : Object.keys(foods)[0];
  const cardes = [];
  if (foods) {
    for (let i = 0; i < foods[category]?.length; i++) {
      cardes.push(
        <Card
          key={i}
          food={foods[category][i]}
          name={foods[category][i].name}
          price={foods[category][i].price}
          descibtion={foods[category][i].description}
        />
      );
    }
  }

  return (
    <main className="pt-6 h-full  ">
      <div
        className="overflow-y-auto "
        style={{
          height: "calc(100vh - 145px)",
        }}
      >
        <h1 className="text-3xl font-semibold">Dishes</h1>
        <div className="h-6"></div>
        <section className="w-full px-4   gap-y-3 grid gap-x-4 grid-cols-[repeat(auto-fit,minmax(min(100%,26ch),1fr))] lg:grid-cols-[repeat(auto-fill,minmax(221px,1fr))]">
          <AddDishCard />
          {cardes}
        </section>
      </div>
    </main>
  );
}

export default Dishes;
