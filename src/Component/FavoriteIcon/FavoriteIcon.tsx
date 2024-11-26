import inactiveIcon from "../../img/svg/inactiveIcon.svg";
import activeIcon from "../../img/svg/activeIcon.svg";
import { Users } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleFavoritesUsers } from "../../store/slice/usersSlice";
import styles from "./styles.module.css";
import { selectFavoritesUsers } from "../../store/selector/selector";

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
