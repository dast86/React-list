
import styles from "./styles.module.css"

const Header = () => {
    return (
        <header className={styles.conteiner}>
                <div className={styles.title}>
                    <p>Список зарегистрированных <span>героев</span></p>
                </div>
                <div className={styles.navigation}>
                    <a href="#" className={styles.active}>Главное</a>
                    <span className={styles.separator}>/</span>
                    <a href="#">Избранное</a>
                </div>
        </header>
    )
}


export default Header