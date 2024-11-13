import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import imagePath from "../../../public/1.png";
import delet from "../../img/svg/delete.svg";
import edit from "../../img/svg/edit.svg";
import styles from "./styles.module.css";

const UserFavorit = () => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
  const dispatch = useAppDispatch();

  const clickDelet = (id: number) => {
    const checkBoolean = favoritesUsers.some(
      (favorites) => favorites.id === id
    );

    if (checkBoolean) {
      const updatedFavorites = favoritesUsers.filter((item) => item.id !== id);
      return dispatch(setFavoritesUsers(updatedFavorites));
    }
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
      
      {favoritesUsers.map((user) => (
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
            <img className={styles.svg} src={edit} alt="" />
          </li>
        </ul>
      ))}
    </>
  );
};

export default UserFavorit;
