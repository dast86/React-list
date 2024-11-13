import Favorit from "../../Component/Favorit/Favorit";
import UsersList from "../../Component/UsersList/UsersList";
import { useGetUserQuery } from "../../store/services/userApi";

import styles from "./styles.module.css";

const Main = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <main className={styles.conteiner}>

      {/* {!isLoading && data && <UsersList data={data} />}  */}

      {<Favorit />}
    </main>
  );
};

export default Main;
