// import dony from "../../img/1.jpg";
// import noActive from "../../img/svg/14.svg";
// import active from "../../img/svg/5.svg"
import axios from "axios";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import UsersList from "../../Component/UsersList/UsersList";




const Main = () => {
  const [users, setUsers] = useState([]);
  const [loding, setLoding] = useState(true);
  

  const url = "https://jsonplaceholder.typicode.com/users";
  const getUser = async () => {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.log(`Ошибка:`, error);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <main className={styles.conteiner}>
      <ul className={styles.title}>
        <li>Фото</li>
        <li>Псевдоним</li>
        <li>Настоящее имя</li>
        <li>Контакты для связи</li>
        <li></li>
      </ul>

      {!loding && <UsersList users={users}/>}
{/* 
      { users.map((user) => (
        <ul className={styles.list} key={user.id}>
          <li>
            <img className={styles.image} src={dony} alt="" />
          </li>
          <li> {user.username}</li>
          <li> {user.name} </li>
          <li>{user.email}</li>
          <li> <img src={noActive}  className={styles.svg} alt="" /></li>
        </ul>
      ))} */}
      {/* <ul className={styles.list}>
                    <li><img className={styles.image} src={dony} alt="" /></li>
                    <li> Дони-Чёп</li>
                    <li> Донателло </li>
                    <li>doni@mail.com</li>
                    <li> <img src={noActive}  className={styles.svg} alt="" /></li>
                </ul> */}
    </main>
  );
};

export default Main;
