// import { useState } from "react";
import { Users } from "../../interface";
import ModalForm from "../ModalForm/ModalForm ";
import { useForm } from "../../hooks/useForm/useForm";

interface Props {
  selectedUser: Users;
  setOpenForm: (params: boolean) => void;
}

const FavoriteFormEdit = ({ selectedUser, setOpenForm }: Props) => {

  const {values, handleChange, handleAddEditForm} = useForm(selectedUser)


  return (
    <ModalForm
      data={values}
      handleChange={handleChange}
      handleAddForm={handleAddEditForm}
      onClose={setOpenForm}
    >
      Изменение пользователя
    </ModalForm>
  );
};

export default FavoriteFormEdit;
