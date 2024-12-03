import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Users } from "../../../entities/users";
import { getLocalStorage } from "../../../shared/lib/localStorage";

interface State {
  favoritesUsers: Users[];
  selectedUsers: Users | null;
}

const initialState: State = {
  favoritesUsers: getLocalStorage() || [],
  selectedUsers: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Переключение состояния избранного пользователя
    toggleFavoritesUsers: (state, action: PayloadAction<Users>) => {
      const findId = state.favoritesUsers.some(
        (user) => user.id === action.payload.id
      );

      if (!findId) {
        state.favoritesUsers.push(action.payload);
      } else {
        state.favoritesUsers = state.favoritesUsers.filter((user) => user.id !== action.payload.id);
      }
    },
    // Удаление пользователя из избранных
    deleteFavoriteUser: (state, action: PayloadAction<number>) => {
      state.favoritesUsers = state.favoritesUsers.filter(
        (user) => user.id !== action.payload
      );
    },
    // Обновление данных избранного пользователя
    uppdateFavoriteUer: (state, action: PayloadAction<Users>) => {
      state.favoritesUsers = state.favoritesUsers.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    // Сохранение выбранного пользователя
    saveSelected: (state, action: PayloadAction<Users>) => {
      state.selectedUsers = action.payload;
    },
  },
});

export const { toggleFavoritesUsers, deleteFavoriteUser, uppdateFavoriteUer, saveSelected } =
  usersSlice.actions;

export default usersSlice.reducer;
