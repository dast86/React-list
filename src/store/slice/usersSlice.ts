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
    setFavoritesUsers: (state, action: PayloadAction<Users[]>) => {
      state.favoritesUsers = action.payload;
      localStorage.setItem("favoritesUsers", JSON.stringify(state.favoritesUsers)); 
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

export const { setFavoritesUsers, setDeleteFavoriteUser, setSaveEditUser } =
  usersSlice.actions;

export default usersSlice.reducer;
