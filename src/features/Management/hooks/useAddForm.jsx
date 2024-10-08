import { useState, useCallback } from "react";
export default function useAddForm() {
  const [isAddForm, setIsAddForm] = useState(false);
  const [AddFormData, setAddFormData] = useState({});
  const toggleAddForm = useCallback(() => {
    setIsAddForm((prev) => !prev);
  }, []);

  const changeAddForm = useCallback(() => {
    setAddFormData({
      formType: "Add",
    });
  }, []);

  return { isAddForm, toggleAddForm, changeAddForm, AddFormData };
}
