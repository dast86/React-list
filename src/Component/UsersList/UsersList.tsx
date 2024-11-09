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

    const [activeIcons, setActiveIcons] = useState<number[]>([]) //потом я вынесу его в редакс 

    const toggleIcon =(userId:number)=>{
        setActiveIcons((prev)=>{
            if (prev.includes(userId)){
                return prev.filter((item)=> item !== userId)
            }
            else {
                return [...prev, userId]
            }
        })
    }
    

    return(
        <>
         { users.map((user) => (
        <ul className={styles.list} key={user.id}>
          <li>
            <img className={styles.image} src={dony} alt="" />
          </li>
          <li> {user.username}</li>
          <li> {user.name} </li>
          <li>{user.email}</li>
          <li > <img 
          onClick={()=>toggleIcon(user.id)}
          src={activeIcons.includes(user.id)? activeSpider:noActiveSpider}  
          className={styles.svg}
           alt="" /></li>
        </ul>
      ))}
        </>
    )
}

export default UsersList