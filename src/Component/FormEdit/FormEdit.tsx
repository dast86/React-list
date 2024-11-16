import { useState } from "react";
import styles from "./styles.module.css";
import { Users } from "../../interface";



interface Props {
  selectedUser:Users,
  setOpen: (params:boolean) => void,
  saveUserChanges: (params:Users) => void
}

const FormEdit = ({ selectedUser, setOpen, saveUserChanges }:Props) => {

  const [nameEdit, setNameEdit] = useState(selectedUser.name);
  const [usernameEdit, setUsernameEdit] = useState(selectedUser.username);
  const [emailEdit, setEmailEdit] = useState(selectedUser.email);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserChanges({ ...selectedUser, name: nameEdit, username: usernameEdit, email: emailEdit });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => setOpen(false)}></div>
      <div className={styles.wrapper}>
        <h2>Изменение пользователя</h2>
        <form action="#" onSubmit={handleSubmit} >
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
          <button  className={styles.button} type="submit">Изменить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormEdit;
