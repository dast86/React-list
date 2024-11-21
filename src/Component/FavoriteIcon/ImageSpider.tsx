import inactiveIcon from "../../img/svg/inactiveIcon.svg";
import activeIcon from "../../img/svg/activeIcon.svg";
import { Users } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import styles from "./styles.module.css";

interface PropsImage {
  user: Users;
}

const FavoriteIcon = ({ user }: PropsImage) => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );
  const dispatch = useAppDispatch();
  const isFavorite  = favoritesUsers.some(
    (favorites) => favorites.id === user.id
  );

  const toggleIcon = (id: number) => {
    const addFavoritesUser = isFavorite 
      ? favoritesUsers.filter((item) => item.id !== id)
      : [...favoritesUsers, user];
    localStorage.setItem("favoritesUsers", JSON.stringify(addFavoritesUser));
    dispatch(setFavoritesUsers(addFavoritesUser));
  };

  return (
      <img
        onClick={() => toggleIcon(user.id)}
        src={isFavorite  ? activeIcon : inactiveIcon}
        className={styles.svg}
        alt="icon"
      />
  );
};

export default FavoriteIcon;
