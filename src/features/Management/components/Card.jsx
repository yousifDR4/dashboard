/* eslint-disable react/prop-types */
export default function Card({
  changeEditForm,
  toggleEditForm,
  food,
  price,
  name,
  descibtion,
}) {
  return (
    <div
      className="h-[299px] mt-8
   w-[100%] lg:w-[221px] bg-[#f7f5f1]  text-center  rounded-md shadow-md  cursor-pointer"
    >
      <div className="h-6"></div>
      <div className="flex justify-center">
        <img
          src="/dish.jpg"
          className="w-[133px] h-[133px] rounded-full bg-black  shadow-lg"
        />
      </div>

      <div className="h-4"></div>
      <div className="flex flex-col justify-between h-[126px]">
        <div>
          <p>{name}</p>
          <p>{descibtion}</p>
          <p>{price}$</p>
        </div>

        <button
          onClick={() => {
            changeEditForm(food);
            toggleEditForm();
          }}
          style={{
            borderEndStartRadius: "6px",
            borderEndEndRadius: "6px",
          }}
          className=" h-[52px] bg-[#C4C7DB]  flex w-full place-content-center items-center "
        >
          <img src="/editdish.svg" className="mr-1 z-10 mt-[1px] " alt="" />
          Edit Dish
        </button>
      </div>
    </div>
  );
}
