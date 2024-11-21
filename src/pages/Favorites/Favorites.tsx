import UserFavorit from "../../Component/UserFavorit/UserFavorit";
import ListHeader from "../../Component/ListHeader/ListHeader";
import { useEffect, useState } from "react";
import { setFavoritesUsers } from "../../store/slice/usersSlice";
import { Users } from "../../interface";
import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import AddUserForm from "../../Component/AddUserForm/AddUserForm";

const Favorites = () => {
  const [addForm, setAddForm] = useState<boolean>(false);
  const [search, setSearch] = useState(``);
  const dispatch = useDispatch();

  // useEffect для localStorage при загрузке
  useEffect(() => {
    const storedUsers = localStorage.getItem("favoritesUsers");
    if (storedUsers) {
      const parsedUsers: Users[] = JSON.parse(storedUsers);
      dispatch(setFavoritesUsers(parsedUsers));
    }
  }, [dispatch]);

  return (
    <>
      <div className={styles.flexConteiner}>
        <div className={styles.buttonForm}>
          <button className={styles.button} onClick={() => setAddForm(true)}>
            Добавить Героя
          </button>
        </div>
        {/* Инпут  */}
        <div className={styles.group}>
          <svg className={styles.icon} aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Поиск"
            type="search"
            className={styles.input}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <ListHeader />

      {addForm && <AddUserForm onClose={setAddForm} />}

      <UserFavorit search={search} />
    </>
  );
};

export default Favorites;
