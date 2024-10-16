/* eslint-disable react/prop-types */

import classes from "./Form.module.css";

export default function Form({ isOpen, data }) {
  if (!isOpen) {
    return null;
  } else if (data.formType === "oneForm") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      ></div>
    );
  } else if (data.formType === "manyForm") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      ></div>
    );
  }
}
