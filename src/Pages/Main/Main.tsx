import dony from "../../img/1.jpg"
import noActive from "../../img/svg/14.svg"
// import active from "../../img/svg/5.svg"
import styles from "./styles.module.css"

const Main = () =>{
    return(
        <main className={styles.conteiner}>
                <ul className={styles.title}>
                    <li>Фото</li>
                    <li>Псевдоним</li>
                    <li>Настоящее имя</li>
                    <li>Контакты для связи</li>
                    <li></li>
                </ul>

                <ul className={styles.list}>
                    <li><img className={styles.image} src={dony} alt="" /></li>
                    <li> Дони-Чёп</li>
                    <li> Донателло </li>
                    <li>doni@mail.com</li>
                    <li> <img src={noActive}  className={styles.svg} alt="" /></li>
                </ul>
        </main>
    )
}


export default Main