/* eslint-disable react/prop-types */

export default function BackDrop({
  isOpen,
  checkboxFormIsOpen,
  toggleEditForm,
}) {
  const openBackdrop = isOpen || checkboxFormIsOpen;
  return (
    openBackdrop && (
      <div
        onClick={() => {
          if (isOpen) {
            toggleEditForm();
          }
        }}
        id="bluerRef"
        className="z-1 top-0 left-0  w-full h-screen fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    )
  );
}
