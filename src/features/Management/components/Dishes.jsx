import AddDishCard from "./AddDishCard";
import Card from "./Card";
function Dishes() {
  const cardes = [];
  for (let i = 0; i < 20; i++) {
    cardes.push(<Card key={i} />);
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
