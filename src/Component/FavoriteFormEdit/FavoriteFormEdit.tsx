import { useState } from "react";
import { Users } from "../../interface";
import ModalForm from "../ModalForm/ModalForm ";

interface Props {
  selectedUser: Users;
  setOpenForm: (params: boolean) => void;
  saveUserChanges: (params: Users) => void;
}

const FavoriteFormEdit = ({ selectedUser, setOpenForm, saveUserChanges }: Props) => {
  const [inputEdit, setInputEdit] = useState({
    name: selectedUser.name,
    username: selectedUser.username,
    email: selectedUser.email,
  });
  // Делаем сразу деструктуризацию
  const { name, username, email } = inputEdit;

  const handleAddForm = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserChanges({ ...selectedUser, name, username, email });
  };

  return (
    <ModalForm
      data={inputEdit}
      setData={setInputEdit}
      handleAddForm={handleAddForm}
      onClose={setOpenForm}
    >
      Изменение пользователя
    </ModalForm>
  );
};

export default FavoriteFormEdit;
