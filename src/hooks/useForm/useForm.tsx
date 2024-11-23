import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers, setSaveEditUser } from "../../store/slice/usersSlice";
import {  Users } from "../../interface";
import { selectFavoritesUsers } from "../../store/selector/selector";

export function useForm(initialValues: Users) {
  const [values, setValues] = useState(initialValues);

  const favoritesUsers = useAppSelector(selectFavoritesUsers);
  const dispatch = useAppDispatch();

  // Id для нового пользователя с условием того, что всего 10 users приходит с api
  const lastId = favoritesUsers.length
    ? favoritesUsers[favoritesUsers.length - 1].id
    : 11;

  const handleAddForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault(); // отключаю поведение по умолчанию
    // Условия, что все три поля будут заполнены
    if (values.name && values.username && values.email) {
      const newUser = {
        id: lastId + 1,
        username: values.username,
        name: values.name,
        email: values.email,
      };
      const newFavoritesUsers = [...favoritesUsers, newUser];
      dispatch(setFavoritesUsers(newFavoritesUsers));
      // Обнуляем поля ввода и id
      setValues({
        name: "",
        username: "",
        email: "",
        id:0,
      });
    }
  };


  const handleAddEditForm = (event: React.FormEvent<HTMLButtonElement>) =>{
    event.preventDefault(); // отключаю поведение по умолчанию
    dispatch(setSaveEditUser(values))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value }); // Обновляем данные формы
  };

  return { values, handleAddForm, handleChange,handleAddEditForm };
}

