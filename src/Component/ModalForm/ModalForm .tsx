import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Users } from "../../interface";


interface Props {
  data: Users;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  handleAddForm: (event: React.FormEvent<HTMLButtonElement>) => void;
  onClose: (param: boolean) => void;
  children: React.ReactNode;
}

const ModalForm  = ({
  data,
  handleChange,
  handleAddForm,
  onClose,
  children,
}: Props) => {

  
  const usernameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  // Для изначального фокуса
  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  // Функция для фокусов по инпутам в форме и добавления пользователя
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    if (!data.username) {
      usernameRef.current?.focus();
      return; // тут во всх условиях пишу return для остановки последующей проверки
    }
    if (!data.name) {
      nameRef.current?.focus();
      return;
    }
    if (!data.email) {
      emailRef.current?.focus();
      return;
    }
    // Вызываем основную функцию при клике
    handleAddForm(event);
    onClose(false)
  };


  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={() => onClose(false)}></div>
      <div className={styles.wrapper}>
        <h2>{children}</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Ваш псевдоним"
              value={data.username}
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Настоящие имя"
              value={data.name}
              name="name"
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              ref={emailRef}
              type="text"
              placeholder="Почта для связи"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputBox}>
            <button
              onClick={handleSubmit}
              className={styles.button}
              type="submit"
            >
              Готово
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm ;
