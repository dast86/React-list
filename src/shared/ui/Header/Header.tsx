import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.conteiner}>
      <div className={styles.title}>
        <p>
          Список зарегистрированных <span>героев</span>
        </p>
      </div>
      <div className={styles.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Главное
        </NavLink>
        <span className={styles.separator}>/</span>

        <NavLink
          to="favorites"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Избранное
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
