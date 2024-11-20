import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import FormEdit from "../FormEdit/FormEdit";
import { useState } from "react";
import { Users } from "../../interface";
import { useDebounce } from "../../hooks/useDebounce";
import UserListItem from "../UserListItem/UserListItem";
import UserListHeader from "../UserListHeader/UserListHeader";

interface Props {
  search: string;
}

const UserFavorit = ({ search }: Props) => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  //  Этот стейт нужен для того, что бы я передавал данные выбранного пользователя в FormEdit
  const [selectedUser, setSelectedUser] = useState<Users | null>(null);

  // Отображение с задержкой в 500 млс
  const debounce = useDebounce(search, favoritesUsers, 500);

  const clickDelet = (id: number) => {
    const updatedFavorites = favoritesUsers.filter((item) => item.id !== id);
    localStorage.setItem("favoritesUsers", JSON.stringify(updatedFavorites));
    return dispatch(setFavoritesUsers(updatedFavorites));
  };

  const saveUserChanges = (updatedUser: Users) => {
    const updatedFavorites = favoritesUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    localStorage.setItem("favoritesUsers", JSON.stringify(updatedFavorites));
    dispatch(setFavoritesUsers(updatedFavorites));
    setOpen(false);
  };

  const clickEdit = (user: Users) => {
    setSelectedUser(user);
    setOpen(true);
  };

  return (
    <>
      <UserListHeader />

      {debounce.map((user) => (
        <UserListItem
          user={user}
          clickDelet={clickDelet}
          clickEdit={clickEdit}
          key={user.id}
        />
      ))}
      {open && selectedUser && (
        <FormEdit
          selectedUser={selectedUser}
          setOpen={setOpen}
          saveUserChanges={saveUserChanges}
        />
      )}
    </>
  );
};

export default UserFavorit;
