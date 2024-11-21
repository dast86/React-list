import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import ModalForm from "../ModalForm/ModalForm ";

interface Props {
  onClose: (form: boolean) => void;
}

const FormUser = ({ onClose }: Props) => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );

  const dispatch = useAppDispatch();
  const [inputForm, setInputForm] = useState({
    name: "",
    username: "",
    email: "",
  });

  // Id для нового пользователя с условием того, что всего 10 users приходит с api
  const lastId = favoritesUsers.length
    ? favoritesUsers[favoritesUsers.length - 1].id
    : 11;

  const ckickAddForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault(); // отключаю поведение по умолчанию
    // Условия, что все три поля будут заполнены
    if (inputForm.name && inputForm.username && inputForm.email) {
      const newUser = {
        id: lastId + 1,
        username: inputForm.username,
        name: inputForm.name,
        email: inputForm.email,
      };
      const newFavoritesUsers = [...favoritesUsers, newUser];
      // Обнуляем поля ввода
      setInputForm({
        name: "",
        username: "",
        email: "",
      });
      onClose(false);
      localStorage.setItem("favoritesUsers", JSON.stringify(newFavoritesUsers)); // довавляю в локалСтор
      dispatch(setFavoritesUsers(newFavoritesUsers));
    }
  };

  return (
    <ModalForm
      data={inputForm}
      setData={setInputForm}
      ckickAddForm={ckickAddForm}
      onClose={onClose}
    >
      Добавление героя
    </ModalForm>
  );
};

export default FormUser;
