import { useState } from "react";
import { UsersWithoutId } from "../../../entities/users";

export function useForm(
  initialValues: UsersWithoutId,
  handelClick: () => void
) {
  const [values, setValues] = useState(initialValues);

  const handleAddForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    for (const k in values) {
      const key = k as keyof UsersWithoutId;
      if (!values[key]) {
        return;
      }
    }
    handelClick();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value }); // Обновляем данные формы
  };

  const updateValues = (e: UsersWithoutId) => {
    setValues(e);
  };

  return { values, handleAddForm, handleChange, updateValues };
}
