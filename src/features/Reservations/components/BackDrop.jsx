/* eslint-disable react/prop-types */
export default function BackDrop({
  isOpenForm,

  toggleForm,

}) {
  const openBackdrop =  isOpenForm;
  return (
    openBackdrop && (
      <div
        onClick={() => {
          if (isOpenForm) {
            toggleForm();
          }
        }}
        id="bluerRef"
        className="z-1 top-0 left-0  w-full h-screen fixed "
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>
    )
  );
}
