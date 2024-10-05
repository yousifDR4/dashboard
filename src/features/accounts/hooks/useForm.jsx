import { useState } from "react";

export default function useFormBackdrop() {
  const [open, setOpen] = useState(false);
  function toggleForm(params) {
    setOpen(!open);
  }
  return { open, toggleForm };
}
