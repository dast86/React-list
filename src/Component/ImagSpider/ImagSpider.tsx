import noActiveSpider from "../../img/svg/14.svg";
import activeSpider from "../../img/svg/5.svg"
import { Users } from "../../interface";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import styles from "./styles.module.css";



interface PropsImage {
    user: Users
}


const ImagSpider = ({ user }:PropsImage) => {

    const favoritesUsers = useAppSelector(store => store.usersStore.favoritesUsers)
    const dispatch = useAppDispatch()
    const booleanFavorites = favoritesUsers.some(favorites => favorites.id === user.id)


    const toggleIcon = (id: number) => {
        const updatedFavorites = booleanFavorites 
        ? favoritesUsers.filter((item) => item.id !== id) 
        :[...favoritesUsers, user]
        localStorage.setItem('favoritesUsers', JSON.stringify(updatedFavorites))
        return dispatch(setFavoritesUsers(updatedFavorites))
    }

    return (
        <>
            <img
                onClick={() => toggleIcon(user.id)}
                src={booleanFavorites ? activeSpider : noActiveSpider}
                className={styles.svg}
                alt="" />
        </>
    )

}

export default ImagSpider