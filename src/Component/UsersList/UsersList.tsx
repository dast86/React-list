import dony from "../../img/1.jpg";
import noActiveSpider from "../../img/svg/14.svg";
import { Users } from "../../interface";
import activeSpider from "../../img/svg/5.svg"

import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";

import styles from "./styles.module.css";


  interface Props {
    users: Users[],
  }

const UsersList = ({users}:Props) =>{

    const favoritesUsers = useAppSelector(store => store.usersStore.favoritesUsers)
    const dispatch = useAppDispatch()

    const toggleIcon =(userId:number)=>{
        const updatedFavorites = favoritesUsers.includes(userId)
        ? favoritesUsers.filter((item)=> item !== userId)
        : [...favoritesUsers,userId];

        return  dispatch(setFavoritesUsers(updatedFavorites))
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
          src={favoritesUsers.includes(user.id)? activeSpider:noActiveSpider}  
          className={styles.svg}
           alt="" /></li>
        </ul>
      ))}
        </>
    )
}

export default UsersList