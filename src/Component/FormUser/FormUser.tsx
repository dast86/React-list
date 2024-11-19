import { useState } from "react";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";

interface Props {
  onClose: (form: boolean) => void;
}

const FormUser = ({ onClose }: Props) => {
  const favoritesUsers = useAppSelector(
    (store) => store.usersStore.favoritesUsers
  );

  const dispatch = useAppDispatch();
  const lastId = favoritesUsers.length
    ? favoritesUsers[favoritesUsers.length - 1].id
    : 11;

  const [name, setName] = useState(``);
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  


  const ckickAddForm = (event:React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (name && username && email) {
      const newUser = {
        id: lastId + 1,
        username,
        name,
        email,
      };
      const newFavoritesUsers = [...favoritesUsers, newUser];

      setName(``);
      setUsername(``);
      setEmail(``);
      onClose(false);



      return dispatch(setFavoritesUsers(newFavoritesUsers));
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => onClose(false)}></div>
      <div className={styles.wrapper}>
        <h2>Добавление пользователя</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Ваш псевдоним"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Настоящие имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Почта для связи"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <button onClick={ckickAddForm} className={styles.button} type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
