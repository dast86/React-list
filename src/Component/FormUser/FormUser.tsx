import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import InputForm from "../Input/Input";

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

  const lastId = favoritesUsers.length
    ? favoritesUsers[favoritesUsers.length - 1].id
    : 11;

  const ckickAddForm = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputForm.name && inputForm.username && inputForm.email) {
      const newUser = {
        id: lastId + 1,
        username: inputForm.username,
        name: inputForm.name,
        email: inputForm.email,
      };
      const newFavoritesUsers = [...favoritesUsers, newUser];

      setInputForm({
        name: "",
        username: "",
        email: "",
      });

      onClose(false);

      localStorage.setItem("favoritesUsers", JSON.stringify(newFavoritesUsers));
      return dispatch(setFavoritesUsers(newFavoritesUsers));
    }
  };

  return (
    <>
      <InputForm
        data={inputForm}
        setData={setInputForm}
        ckickAddForm={ckickAddForm}
        onClose={onClose}
      >
        Добавление пользователя
      </InputForm>
    </>
  );
};

export default FormUser;
