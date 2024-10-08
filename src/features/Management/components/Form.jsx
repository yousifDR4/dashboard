/* eslint-disable react/prop-types */
import AddForm from "./AddDishForm";
import classes from "./Form.module.css";
export default function Form({ isOpen, data, isAddForm }) {
  if (isOpen) {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      ></div>
    );
  }
  if (isAddForm) {
    return (
      <div
        className={`${classes.form} w-[750px]  bg-white z-30 fixed rounded-xl`}
      >
        <div className="h-[500px]">
          <AddForm />
        </div>
      </div>
    );
  }
}
