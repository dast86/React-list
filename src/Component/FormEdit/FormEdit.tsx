import { useState } from "react";
import { Users } from "../../interface";
import ModalForm from "../ModalForm/ModalForm ";

interface Props {
  selectedUser: Users;
  setOpen: (params: boolean) => void;
  saveUserChanges: (params: Users) => void;
}

const FormEdit = ({ selectedUser, setOpen, saveUserChanges }: Props) => {
  const [inputEdit, setInputEdit] = useState({
    name: selectedUser.name,
    username: selectedUser.username,
    email: selectedUser.email,
  });
  // Делаем сразу деструктуризацию
  const { name, username, email } = inputEdit;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserChanges({ ...selectedUser, name, username, email });
  };

  return (
    <ModalForm
      data={inputEdit}
      setData={setInputEdit}
      ckickAddForm={handleSubmit}
      onClose={setOpen}
    >
      Изменение пользователя
    </ModalForm>
  );
};

export default FormEdit;
