import styles from "./styles.module.css";

const UserListHeader = () => {
  return (
    <ul className={styles.title}>
      <li>Фото</li>
      <li>Псевдоним</li>
      <li>Настоящее имя</li>
      <li>Контакты для связи</li>
      <li></li>
    </ul>
  );
};

export default UserListHeader;
