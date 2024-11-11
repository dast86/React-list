import { Users } from "../../interface";
import Image from "../Image/Image";
import imagePath from "../../../public/1.png"



import styles from "./styles.module.css";


interface Props {
    data: Users[],
}

const UsersList = ({ data }: Props) => {

    return (
        <>
            {data.map((user) => {

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
                        <li > <Image user={user}/> </li>
                    </ul>
                )
            }
            )}
        </>
    )
}

export default UsersList