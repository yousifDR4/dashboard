import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function AddDishCard({ changeAddForm, toggleAddForm }) {
  return (
    <Link to={"/Management/AddDishForm"}>
      <div
        onClick={() => {
          changeAddForm();
          toggleAddForm();
        }}
        className="h-[299px] mt-8
     w-[221px] bg-[#f7f5f1]  text-center 
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
