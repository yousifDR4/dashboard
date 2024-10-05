import React from "react";
import classes from "./Form.module.css";
export default function Form({ isOpen, data }) {
  console.log(isOpen);

  if (!isOpen) {
    return null;
  } else
    return (
      <div
        className={`${classes.form} w-[450px] h-[600px] bg-white z-30 fixed rounded-xl`}
      >
        Form
      </div>
    );
}
