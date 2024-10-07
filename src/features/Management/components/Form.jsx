/* eslint-disable react/prop-types */

import classes from "./Form.module.css";
export default function Form({ isOpen, data }) {
  console.log(data);
  if (!isOpen) {
    return null;
  } else if (data.formType === "AddDish") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      ></div>
    );
  } else if (data.formType === "EditDish") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      ></div>
    );
  }
}
