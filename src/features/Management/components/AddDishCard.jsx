import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function AddDishCard() {
  return (
    <Link to={"/Management/ProductsManagment/AddDishForm"}>
      <div
        className="h-[299px] mt-8 w-[100%]
     lg:w-[221px] bg-[#f7f5f1]  text-center 
      rounded-md shadow-md  cursor-pointer 
      place-content-center 
      "
      >
        <img src="/Addnew.svg" className="mr-auto ml-auto" />
        <p className=" mt-2 text-[#5A67BA] text-pretty text-lg font-medium">
          Add New Dish{" "}
        </p>
      </div>
    </Link>
  );
}
