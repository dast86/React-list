import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface State {
    favoritesUsers: number[],
}

const initialState:State = {
    favoritesUsers:[],
}

export const usersSlice = createSlice({
  name: 'users',  
  initialState,
  reducers: {
    setFavoritesUsers: (state, action: PayloadAction<number[]>) => {
      state.favoritesUsers = action.payload
    },
  },
})

export const { setFavoritesUsers } = usersSlice.actions 

export default usersSlice.reducer 