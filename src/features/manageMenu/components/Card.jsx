export default function Card() {
  return (
    <div
      className="h-[226px] mt-8
   w-[192px] bg-[#f7f5f1]  text-center  rounded-md shadow-md relative cursor-pointer"
    >
      <div className="flex justify-center">
        <img
          src="dish.jpg"
          className="w-[133px] h-[133px] rounded-full bg-black absolute -top-8 shadow-lg"
        />
      </div>

      <div className="h-24 mb-4"></div>
      <p>Spicy seasoned</p>
      <p>seafood noodles</p>
      <p>$ 2.29</p>
    </div>
  );
}
