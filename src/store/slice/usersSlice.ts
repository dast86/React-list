import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../interface";

interface State {
  favoritesUsers: Users[];
}

const initialState: State = {
  favoritesUsers: JSON.parse(localStorage.getItem("favoritesUsers") || "[]"),
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleFavoritesUsers: (state, action: PayloadAction<Users>) => {

      const findId = state.favoritesUsers.some(user => user.id === action.payload.id)

      if (!findId) {
        state.favoritesUsers.push(action.payload)
      } 
      else {
        state.favoritesUsers.filter(user => user.id !== action.payload.id)
      }
    },
    setDeleteFavoriteUser: (state, action: PayloadAction<number>) => {
      state.favoritesUsers = state.favoritesUsers.filter(
        (user) => user.id !== action.payload
      );
      localStorage.setItem(
        "favoritesUsers",
        JSON.stringify(state.favoritesUsers)
      );
    },
    setSaveEditUser: (state, action: PayloadAction<Users>) => {
      state.favoritesUsers = state.favoritesUsers.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
      localStorage.setItem(
        "favoritesUsers",
        JSON.stringify(state.favoritesUsers)
      );
    },
  },
});

export const { toggleFavoritesUsers, setDeleteFavoriteUser, setSaveEditUser } =
  usersSlice.actions;

export default usersSlice.reducer;
