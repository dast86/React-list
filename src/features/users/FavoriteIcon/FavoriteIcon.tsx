import inactiveIcon from "../../../assets/img/svg/inactiveIcon.svg";
import activeIcon from "../../../assets/img/svg/activeIcon.svg";
import { useEffect } from "react";
import { Users } from "../../../entities/users";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { selectFavoritesUsers } from "../../../app/store/selector/selector";
import { saveToLocalStorage } from "../../../shared/lib/localStorage";
import { toggleFavoritesUsers } from "../../../app/store/slice/usersSlice";

import styles from "./styles.module.css";

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

  useEffect(() => {
    saveToLocalStorage(favoritesUsers);
  }, [favoritesUsers]);

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
