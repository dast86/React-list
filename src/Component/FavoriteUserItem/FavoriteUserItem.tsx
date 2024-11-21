import defaultAvatar from "../../img/defaultAvatar.png";
import delet from "../../img/svg/delete.svg";
import edit from "../../img/svg/edit.svg";
import { Users } from "../../interface";
import styles from "./styles.module.css";

interface Props {
  user: Users;
  handleDelete: (id: number) => void;
  handleEdit: (params: Users) => void;
}

const FavoriteUserItem = ({ user, handleDelete, handleEdit }: Props) => {
  return (
    <li key={user.id} className={styles.list}>
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
          onClick={() => handleDelete(user.id)}
          className={styles.svg}
          src={delet}
          alt="Удалить"
        />
        <img
          className={styles.svg}
          onClick={() => handleEdit(user)}
          src={edit}
          alt="Изменить"
        />
      </div>
    </li>
  );
};

export default FavoriteUserItem;
