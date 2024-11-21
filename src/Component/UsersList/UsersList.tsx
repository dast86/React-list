import { Users } from "../../interface";
import FavoriteIcon from "../FavoriteIcon/ImageSpider";
import defaultAvatar from "../../img/defaultAvatar.png";

import styles from "./styles.module.css";

interface Props {
  data: Users[];
}

const UsersList = ({ data }: Props) => {
  return (
    <>
      {data.map((user) => {
        return (
          <ul className={styles.list} key={user.id}>
            <li>
              <div className={styles.icons}>
                <img className={styles.image} src={defaultAvatar} alt="аватар" />
              </div>
            </li>
            <li> {user.username}</li>
            <li> {user.name} </li>
            <li>{user.email}</li>
            <li>
              <FavoriteIcon user={user} />
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default UsersList;
