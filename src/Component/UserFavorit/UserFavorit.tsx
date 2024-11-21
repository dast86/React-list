import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import { useState } from "react";
import { Users } from "../../interface";
import { useDebounce } from "../../hooks/useDebounce";
import FavoriteUserItem from "../FavoriteUserItem/FavoriteUserItem";
import FavoriteFormEdit from "../FavoriteFormEdit/FavoriteFormEdit";

interface Props {
  search: string;
}

const UserFavorit = ({ search }: Props) => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
  const dispatch = useAppDispatch();
  const [openForm, setOpenForm] = useState(false);

  //  Этот стейт нужен для того, что бы я передавал данные выбранного пользователя в FormEdit
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);

  // Отображение с задержкой в 500 млс
  const debounce = useDebounce(search, 500);
  // отфильтрованные пользователи
  const filteredFavorites = favoritesUsers.filter((user) =>
    user.name.toLowerCase().includes(debounce.toLowerCase())
  );

  const handleDelete = (id: number) => {
    const updatedFavorites = favoritesUsers.filter((item) => item.id !== id);
    localStorage.setItem("favoritesUsers", JSON.stringify(updatedFavorites));
    dispatch(setFavoritesUsers(updatedFavorites));
  };

  const saveUserChanges = (updatedUser: Users) => {
    const updatedFavorites = favoritesUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    localStorage.setItem("favoritesUsers", JSON.stringify(updatedFavorites));
    dispatch(setFavoritesUsers(updatedFavorites));
    setOpenForm(false);
  };

  const handleEdit = (user: Users) => {
    setSelectedUser(user);
    setOpenForm(true);
  };

  return (
    <ul>
      {filteredFavorites.map((user) => (
        <FavoriteUserItem
          user={user}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          key={user.id}
        />
      ))}
      {openForm && selectedUser && (
        <FavoriteFormEdit
          selectedUser={selectedUser}
          setOpenForm={setOpenForm}
          saveUserChanges={saveUserChanges}
        />
      )}
    </ul>
  );
};

export default UserFavorit;
