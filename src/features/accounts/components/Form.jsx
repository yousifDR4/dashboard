import React from "react";
import classes from "./Form.module.css";
import AddUser from "./Adduser";
export default function Form({ isOpen, data }) {
  console.log(isOpen);

  if (!isOpen) {
    return null;
  } else if (data.formType === "AddUser") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      >
        <AddUser />
      </div>
    );
  }
}
