import { useAppDispatch, useAppSelector } from "../../store";
import { useDebounce } from "../../hooks/useDebounce/useDebounce";
import {
  selectFavoritesUsers,
  selectSelectedUsers,
} from "../../store/selector/selector";
import { useForm } from "../../hooks/useForm/useForm";
import useModal from "../../hooks/useModal/useModal";
import ModalForm from "../ModalForm/ModalForm ";
import FavoriteUserList from "../FavoriteUserList/FavoriteUserList";
import { uppdateFavoriteUer } from "../../store/slice/usersSlice";
import { useEffect } from "react";
import { saveToLocalStorage } from "../../helpers/localStorage";

interface Props {
  search: string;
}

const UserFavorit = ({ search }: Props) => {
  const favoritesUsers = useAppSelector(selectFavoritesUsers);
  const selected = useAppSelector(selectSelectedUsers);
  const dispatch = useAppDispatch();

  const hendelSubmit = () => {
    if (!selected) return;

    dispatch(uppdateFavoriteUer({id:selected.id, ...values}));
    handelModalClose()
  };

  const { isOpen, handelModalClose, handelModalOpen } = useModal();

  const { values, handleAddForm, handleChange, updateValues } = useForm(
    {
      name: "",
      username: "",
      email: "",
    },
    hendelSubmit
  );

  // Отображение с задержкой в 500 млс
  const debounce = useDebounce(search, 500);
  // отфильтрованные пользователи
  const filteredFavorites = favoritesUsers.filter((user) =>
    user.name.toLowerCase().includes(debounce.toLowerCase())
  );

  useEffect(() => {
    if (selected) {
      updateValues({
        name: selected?.name,
        username: selected?.username,
        email: selected?.email,
      });
    }
  }, [selected]);

  useEffect(()=>{
    saveToLocalStorage(favoritesUsers)
  }, [favoritesUsers])


  return (
    <>
      <FavoriteUserList
        users={filteredFavorites}
        handelModalOpen={handelModalOpen}
      />

      {isOpen && selected && (
        <ModalForm
          data={values}
          handleChange={handleChange}
          handleAddForm={handleAddForm}
          onClose={handelModalClose}
        >
          Изменение пользователя
        </ModalForm>
      )}
    </>
  );
};

export default UserFavorit;
