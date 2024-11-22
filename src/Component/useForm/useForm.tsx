import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import { DataInput } from "../ModalForm/ModalForm ";



export function useForm(initialValues:DataInput) {

  const [values, setValues] = useState(initialValues);

  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
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
        username: initialValues.username,
        name: initialValues.name,
        email: initialValues.email,
      };
      const newFavoritesUsers = [...favoritesUsers, newUser];
      // Обнуляем поля ввода
      setValues({
        name: "",
        username: "",
        email: "",
      });
      console.log(newUser)
      localStorage.setItem("favoritesUsers", JSON.stringify(newFavoritesUsers)); // довавляю в локалСтор
      dispatch(setFavoritesUsers(newFavoritesUsers));
    }
    // console.log("я вызываюсь")
  };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value }); // Обновляем данные формы
  };
  
  return {values, handleAddForm,handleChange}
}
