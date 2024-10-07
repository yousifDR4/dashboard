import { useState, useCallback } from "react";
export default function useEditForm() {
  const [isEditForm, setIsEditForm] = useState(false);
  const [EditFormData, setEditFormData] = useState({});
  const toggleEditForm = useCallback(() => {
    setIsEditForm((prev) => !prev);
  }, []);

  const changeEditForm = useCallback((data) => {
    setEditFormData({
      formType: "Edit",
      data,
    });
  }, []);

  return { isEditForm, toggleEditForm, changeEditForm, EditFormData };
}
