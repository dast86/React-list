import noActiveSpider from "../../img/svg/14.svg";
import activeSpider from "../../img/svg/5.svg"
import { useAppDispatch, useAppSelector } from "../../store";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import styles from "./styles.module.css";



interface PropsImage {
    id: number
}


const Image = ({ id }:PropsImage) => {

    const favoritesUsers = useAppSelector(store => store.usersStore.favoritesUsers)
    const dispatch = useAppDispatch()

    const toggleIcon = (userId: number) => {
        const updatedFavorites = favoritesUsers.includes(userId)
            ? favoritesUsers.filter((item) => item !== userId)
            : [...favoritesUsers, userId];

        return dispatch(setFavoritesUsers(updatedFavorites))
    }
    return (
        <>
            <img
                onClick={() => toggleIcon(id)}
                src={favoritesUsers.includes(id) ? activeSpider : noActiveSpider}
                className={styles.svg}
                alt="" />
        </>
    )

}

export default Image