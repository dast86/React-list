import ModalForm from "../ModalForm/ModalForm ";
import { useForm } from "../../hooks/useForm/useForm";

interface Props {
  onClose: (isOpen: boolean) => void;
}

const AddUserForm = ({ onClose }: Props) => {
  const { values, handleAddForm, handleChange } = useForm({
    id:0,
    name: "",
    username: "",
    email: "",
  });

  return (
    <ModalForm
      data={values}
      handleChange={handleChange}
      handleAddForm={handleAddForm}
      onClose={onClose}
    >
      Добавление героя
    </ModalForm>
  );
};

export default AddUserForm;
