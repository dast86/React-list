import { useState } from "react";
import styles from "./styles.module.css";
// import { useAppDispatch, useAppSelector } from "../../store";

const FormEdit = ({ user, setOpen }) => {
  const [nameEdit, setNameEdit] = useState(user.name);
  const [usernameEdit, setUsernameEdit] = useState(user.username);
  const [emailEdit, setEmailEdit] = useState(user.email);

  const changeUser = () => {
    console.log(user)
    setOpen(false)
    
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <h2>Изменение пользователя</h2>
        <form action="#" >
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Ваш псевдоним"
              value={usernameEdit}
              onChange={(e) => setUsernameEdit(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Настоящие имя"
              value={nameEdit}
              onChange={(e) => setNameEdit(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Почта для связи"
              value={emailEdit}
              onChange={(e) => setEmailEdit(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputBox}>
          <button onClick={changeUser} className={styles.button} type="submit">Изменить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
