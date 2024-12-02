import { RootState } from "../index"


export const selectFavoritesUsers = (state:RootState) => state.usersStore.favoritesUsers
export const selectSelectedUsers = (state:RootState) => state.usersStore.selectedUsers



