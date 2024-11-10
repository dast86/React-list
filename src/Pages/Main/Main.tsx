import UsersList from "../../Component/UsersList/UsersList";
import { useGetUserQuery } from "../../store/services/userApi";

import styles from "./styles.module.css";




const Main = () => {

  const { data:users, isLoading } = useGetUserQuery()



  return (
    <main className={styles.conteiner}>
      <ul className={styles.title} >
        <li>Фото</li>
        <li>Псевдоним</li>
        <li>Настоящее имя</li>
        <li>Контакты для связи</li>
        <li></li>
      </ul>

      {!isLoading && users && <UsersList users={users} />} 
      {/* Либо такой вариант, хз какой лучше по читабельности 
        {!isLoading && <UsersList users={users ?? []} />} */}

    </main>
  );
};

export default Main;
