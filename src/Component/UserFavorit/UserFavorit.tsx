import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import imagePath from "../../../public/1.png";
import delet from "../../img/svg/delete.svg";
import edit from "../../img/svg/edit.svg";
import styles from "./styles.module.css";
import FormEdit from "../FormEdit/FormEdit";
import { useState } from "react";

const UserFavorit = () => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null)




  const clickDelet = (id: number) => {
    const checkBoolean = favoritesUsers.some(
      (favorites) => favorites.id === id
    );

    if (checkBoolean) {
      const updatedFavorites = favoritesUsers.filter((item) => item.id !== id);
      return dispatch(setFavoritesUsers(updatedFavorites));
    }
  };

  const clickEdit = (user) => {
    // const checkBoolean = favoritesUsers.some(
    //   (favorites) => favorites.id === id
    // );

    // if (checkBoolean) {
      setSelectedUser(user)
      // setOpen(true);
      // console.log(id)
    // }
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
          <div key={user.id}>
            <ul className={styles.list}>
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
          </div>
        );
      })}
      {/* {open && <FormEdit user={user}  setOpen={setOpen}/>} */}
    </>
  );
};

export default UserFavorit;
