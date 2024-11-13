import styles from "./styles.module.css";

const FormUser = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.wrapper}>
        <h2>Registration</h2>
        <form action="#">
          <div className={styles.inputBox}>
            <input type="text" placeholder="Ваш псевдоним" required />
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Настоящие имя" required />
          </div>
          <div className={styles.inputBox}>
            <input type="text" placeholder="Почта для связи" required />
          </div>
          <div className={styles.inputBox}>
            <input type="Submit" value="Register Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
