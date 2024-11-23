import { useAppDispatch, useAppSelector } from "../../store";
import { setDeleteFavoriteUser } from "../../store/slice/usersSlice";
import { useState } from "react";
import { Users } from "../../interface";
import { useDebounce } from "../../hooks/useDebounce/useDebounce";
import FavoriteUserItem from "../FavoriteUserItem/FavoriteUserItem";
import FavoriteFormEdit from "../FavoriteFormEdit/FavoriteFormEdit";
import { selectFavoritesUsers } from "../../store/selector/selector";

interface Props {
  search: string;
}

const UserFavorit = ({ search }: Props) => {
  const favoritesUsers = useAppSelector(selectFavoritesUsers);
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
    dispatch(setDeleteFavoriteUser(id));
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
        />
      )}
    </ul>
  );
};

export default UserFavorit;
