import { Users } from "../../entities/users";

export const getLocalStorage = (): Users[] | null => {
  const storage = localStorage.getItem("favoritesUsers");
  if (storage) {
    return JSON.parse(storage);
  }
  return null;
};

export const saveToLocalStorage = (favoritesUsers: Users[]) => {
  localStorage.setItem("favoritesUsers", JSON.stringify(favoritesUsers));
};


