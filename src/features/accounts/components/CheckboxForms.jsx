import React from "react";
import classes from "./Form.module.css";
import AddUser from "./Adduser";
import EditUser from "./EditUser";
export default function CheckboxForms({ isOpen, data }) {
  console.log(data);
  const keys = Object.keys(data);
  console.log(isOpen);

  if (!isOpen) {
    return null;
  }
  return (
    <div
      className={`${classes.form} w-[450px]  bg-white z-30 fixed rounded-xl`}
    >
      <div className="overflow-y-auto relative h-[600px]">
        {keys.map((key) => (
          <EditUser type={data[key].AccountType} userId={data[key].userId} />
        ))}
      </div>
    </div>
  );
}
