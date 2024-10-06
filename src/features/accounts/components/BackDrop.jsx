import React from "react";

export default function BackDrop({
  isOpen,
  toggleForm,
  checkboxFormsIsOpen,
  toggleCheckboxForms,
}) {
  const openBackdrop = isOpen || checkboxFormsIsOpen;
  return (
    openBackdrop && (
      <div
        onClick={() => {
          if (isOpen) {
            toggleForm();
          }
          if (checkboxFormsIsOpen) {
            toggleCheckboxForms();
          }
        }}
        id="bluerRef"
        className="z-1 top-0 left-0  w-full h-screen fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    )
  );
}
