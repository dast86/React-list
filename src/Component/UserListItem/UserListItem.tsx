import defaultAvatar  from "../../img/defaultAvatar.png"
import delet from "../../img/svg/delete.svg";
import edit from "../../img/svg/edit.svg";
import { Users } from "../../interface";
import styles from "./styles.module.css";

interface Props {
  user: Users;
  clickDelet: (id: number) => void;
  clickEdit: (params: Users) => void;
}

const UserListItem = ({ user, clickDelet, clickEdit }: Props) => {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <div className={styles.icons}>
            <img className={styles.image} src={defaultAvatar} alt="Аватар пользователя" />
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
            alt="Удалить"
          />
          <img
            className={styles.svg}
            onClick={() => clickEdit(user)}
            src={edit}
            alt="Изменить"
          />
        </li>
      </ul>
    </>
  );
};

export default UserListItem;
