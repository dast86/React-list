import Favorit from "../../Component/Favorit/Favorit";
import Users from "../../Component/Users/Users";
import { Routes, Route } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
  return (
    <main className={styles.conteiner}>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/favorit" element={<Favorit />} />
      </Routes>
    </main>
  );
};

export default Main;
