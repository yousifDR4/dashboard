import React from "react";
import classes from "./Form.module.css";
import AddUser from "./Adduser";
import EditUser from "./EditUser";
export default function Form({ isOpen, data }) {
  console.log(data);

  if (!isOpen) {
    return null;
  } else if (data.formType === "AddUser") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      >
        <AddUser usersEmail={data.usersEmail} />
      </div>
    );
  } else if (data.formType === "EditUser") {
    return (
      <div
        className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
      >
        <EditUser type={data.userType} userId={data.userId} />
      </div>
    );
  }
}
