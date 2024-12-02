import inactiveIcon from "../../img/svg/inactiveIcon.svg";
import activeIcon from "../../img/svg/activeIcon.svg";
import { Users } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleFavoritesUsers } from "../../store/slice/usersSlice";
import { selectFavoritesUsers } from "../../store/selector/selector";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { saveToLocalStorage } from "../../helpers/localStorage";

interface PropsImage {
  user: Users;
}

const FavoriteIcon = ({ user }: PropsImage) => {
  const favoritesUsers = useAppSelector(selectFavoritesUsers);
  const dispatch = useAppDispatch();
  const isFavorite = favoritesUsers.some(
    (favorites) => favorites.id === user.id
  );

  const toggleIcon = (user: Users) => {
    dispatch(toggleFavoritesUsers(user));
  };


  useEffect(()=>{
    saveToLocalStorage(favoritesUsers)
  }, [favoritesUsers])

  return (
    <img
      onClick={() => toggleIcon(user)}
      src={isFavorite ? activeIcon : inactiveIcon}
      className={styles.svg}
      alt="icon"
    />
  );
};

export default FavoriteIcon;
