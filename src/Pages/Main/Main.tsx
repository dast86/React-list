import UsersFavorit from "../../Component/UsersFavorit/UsersFavorit";
import UsersList from "../../Component/UsersList/UsersList";
import { useGetUserQuery } from "../../store/services/userApi";

import styles from "./styles.module.css";




const Main = () => {

  const { data, isLoading } = useGetUserQuery()



  return (
    <main className={styles.conteiner}>

      {!isLoading && data && <UsersList data={data} />} 

      {<UsersFavorit/>}


    </main>
  );
};

export default Main;
