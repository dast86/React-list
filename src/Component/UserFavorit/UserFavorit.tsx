import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import imagePath from "../../../public/1.png";
import delet from "../../img/svg/delete.svg";
import edit from "../../img/svg/edit.svg";
import styles from "./styles.module.css";
import FormEdit from "../FormEdit/FormEdit";
import { useState } from "react";
import { Users } from "../../interface";

const UserFavorit = () => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Users | null>(null)

  const clickDelet = (id: number) => {
    const checkBoolean = favoritesUsers.some(
      (favorites) => favorites.id === id
    );

    if (checkBoolean) {
      const updatedFavorites = favoritesUsers.filter((item) => item.id !== id);
      return dispatch(setFavoritesUsers(updatedFavorites));
    }
  };


  const saveUserChanges = (updatedUser:Users) => {
    const updatedFavorites = favoritesUsers.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    dispatch(setFavoritesUsers(updatedFavorites));
    setOpen(false);
  };

  const clickEdit = (user:Users) => {
      setSelectedUser(user)
      setOpen(true);
  };



  return (
    <>
      <ul className={styles.title}>
        <li>Фото</li>
        <li>Псевдоним</li>
        <li>Настоящее имя</li>
        <li>Контакты для связи</li>
        <li></li>
      </ul>

      {favoritesUsers.map((user) => {
        return (
            <ul className={styles.list} key={user.id}>
              <li>
                <div className={styles.icons}>
                  <img className={styles.image} src={imagePath} alt="" />
                </div>
              </li>
              <li> {user.username}</li>
              <li> {user.name} </li>
              <li>{user.email}</li>
              <li className={styles.actions}>
                <img
                  onClick={() => clickDelet(user.id)}
                  className={styles.svg}
                  src={delet}
                  alt=""
                />
                <img className={styles.svg} onClick={() => clickEdit(user)} src={edit} alt="" />
              </li>
            </ul>
        );
      })}
      {open &&  selectedUser && <FormEdit
          selectedUser={selectedUser}
          setOpen={setOpen}
          saveUserChanges={saveUserChanges}
        />}
    </>
  );
};

export default UserFavorit;
