import { useState } from "react";
import dony from "../../img/1.jpg";
import noActiveSpider from "../../img/svg/14.svg";
import { Users } from "../../interface";
import activeSpider from "../../img/svg/5.svg"
import styles from "./styles.module.css";


  interface Props {
    users: Users[],
  }

const UsersList = ({users}:Props) =>{
    // Тут создаю состояние, которое является массивом булевых значений, которые равны кол-ву созданных элементов из пропса users
    const[active, setActive] = useState(Array(users.length).fill(false))

    // 
    const handelClickIcon = (index:number) =>{
        setActive((prev) => 
            prev.map((isActive, i) => (i===index ? !isActive: isActive)) //тут создам цикл и прохожусь по каждому элементу из массива active
    )

        }
    

    return(
        <>
         { users.map((user,index) => (
        <ul className={styles.list} key={user.id}>
          <li>
            <img className={styles.image} src={dony} alt="" />
          </li>
          <li> {user.username}</li>
          <li> {user.name} </li>
          <li>{user.email}</li>
          <li > <img 
          onClick={()=>handelClickIcon(index)}
          src={active[index] ? activeSpider: noActiveSpider}  
          className={styles.svg}
           alt="" /></li>
        </ul>
      ))}
        </>
    )
}

export default UsersList