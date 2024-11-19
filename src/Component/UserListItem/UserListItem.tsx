import imagePath from "../../../public/1.png";
import delet from "../../img/svg/delete.svg";
import edit from "../../img/svg/edit.svg";
import { Users } from "../../interface";
import styles from "./styles.module.css";

interface Props {
    user:Users,
    clickDelet: (id: number) => void
    clickEdit: (params:Users) => void
}

const UserListItem = ({user,clickDelet,clickEdit}:Props) => {

  return (
    <>
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
              <img
                className={styles.svg}
                onClick={() => clickEdit(user)}
                src={edit}
                alt=""
              />
            </li>
          </ul>
    </>
  );
};

export default UserListItem;
