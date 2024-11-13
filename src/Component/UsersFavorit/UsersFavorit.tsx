import { useAppSelector } from "../../store";
// import { setFavoritesUsers } from "../../store/slice/usersSlice";
import imagePath from "../../../public/1.png"
import delet from "../../img/svg/delete.svg"
import edit from "../../img/svg/edit.svg"

import styles from "./styles.module.css";


const UsersFavorit = () => {
    const favoritesUsers = useAppSelector(store => store.usersStore.favoritesUsers)


    const clickDelet = (id)=>{
        if (favoritesUsers.some(favorites => favorites.id === id))
    }
    return (
        <>
            {favoritesUsers.map((user) => (
                <ul className={styles.list} key={user.id}>
                    <li>
                        <div className={styles.icons}>
                            <img className={styles.image} src={imagePath} alt="" />
                        </div>
                    </li>
                    <li> {user.username}</li>
                    <li> {user.name} </li>
                    <li>{user.email}</li>
                    <li className={styles.actions}> 
                        <img className={styles.svg} src={delet} alt="" />
                        <img className={styles.svg} src={edit} alt="" />
                    </li>
                </ul>
            ))}
        </>
    )
}


export default UsersFavorit