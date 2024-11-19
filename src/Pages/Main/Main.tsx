import Favorit from "../../Component/Favorit/Favorit";
import Users from "../../Component/Users/Users";


import styles from "./styles.module.css";

const Main = () => {

  return (
    <main className={styles.conteiner}>
      {/* <Users/> */}
      <Favorit />
    </main>
  );
};

export default Main;
