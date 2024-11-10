import { Users } from "../../interface";
import Image from "../Image/Image";



import styles from "./styles.module.css";


interface Props {
    data: Users[],
}

const UsersList = ({ data }: Props) => {

    return (
        <>
            {data.map((user) => {
                const randomIcons = Math.floor(Math.random() * 25) + 1
                const imagePath  = `../../../public/${randomIcons}.png`

                return (
                    <ul className={styles.list} key={user.id}>
                        <li>
                            <div className={styles.icons}>
                                <img className={styles.image} src={imagePath} alt="" />
                            </div>
                        </li>
                        <li> {user.username}</li>
                        <li> {user.name} </li>
                        <li>{user.email}</li>
                        <li > <Image id={user.id}/> </li>
                    </ul>
                )
            }
            )}
        </>
    )
}

export default UsersList