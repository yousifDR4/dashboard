/* eslint-disable react/prop-types */

export default function BackDrop({
  isOpen,
  toggleEditForm,
  isAddForm,
  toggleAddForm,
}) {
  const openBackdrop = isOpen || isAddForm;
  return (
    openBackdrop && (
      <div
        onClick={() => {
          if (isOpen) {
            toggleEditForm();
          }
          if (isAddForm) {
            toggleAddForm();
          }
        }}
        id="bluerRef"
        className="z-1 top-0 left-0  w-full h-screen fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    )
  );
}
