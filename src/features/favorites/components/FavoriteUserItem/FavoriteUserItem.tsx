import defaultAvatar from "../../../../assets/img/defaultAvatar.png";
import delet from "../../../../assets/img/svg/delete.svg";
import edit from "../../../../assets/img/svg/edit.svg";
import { Users } from "../../../../entities/users";
import { useAppDispatch } from "../../../../app/store";
import { deleteFavoriteUser, saveSelected } from "../../../../app/store/slice/usersSlice";

import styles from "./styles.module.css";

interface Props {
  user: Users;
  handelModalOpen: () => void;
}

const FavoriteUserItem = ({ user, handelModalOpen }: Props) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteFavoriteUser(user.id));
    // dispatch(toggleFavoritesUsers(user)); - Так тоже пользователь удаляется, но я не пойму, какой подход в итоге лучше?
  };

  const handleEdit = () => {
    dispatch(saveSelected(user));
    handelModalOpen();
  };

  return (
    <li className={styles.list}>
      <div>
        <div className={styles.icons}>
          <img className={styles.image} src={defaultAvatar} alt="аватар" />
        </div>
      </div>
      <div>{user.username}</div>
      <div>{user.name} </div>
      <div>{user.email}</div>
      <div className={styles.actions}>
        <img
          onClick={handleDelete}
          className={styles.svg}
          src={delet}
          alt="Удалить"
        />
        <img
          className={styles.svg}
          onClick={handleEdit}
          src={edit}
          alt="Изменить"
        />
      </div>
    </li>
  );
};

export default FavoriteUserItem;
