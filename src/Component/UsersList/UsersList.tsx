import { Users } from "../../interface";
import FavoriteIcon from "../FavoriteIcon/FavoriteIcon";
import defaultAvatar from "../../img/defaultAvatar.png";
import styles from "./styles.module.css";

interface Props {
  data: Users[];
}

const UsersList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id} className={styles.list}>
          <div>
            <div className={styles.icons}>
              <img className={styles.image} src={defaultAvatar} alt="аватар" />
            </div>
          </div>
          <div>{user.username}</div>
          <div>{user.name} </div>
          <div>{user.email}</div>
          <div>
            <FavoriteIcon user={user} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
