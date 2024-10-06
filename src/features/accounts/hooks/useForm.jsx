import { useState } from "react";

export default function useFormBackdrop() {
  const [open, setOpen] = useState(false);
  function toggleForm() {
    setOpen(!open);
  }
  return { open, toggleForm };
}
