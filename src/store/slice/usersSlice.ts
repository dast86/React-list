import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Users } from '../../interface'

interface State {
    favoritesUsers: Users[]
}

const initialState:State = {
    favoritesUsers:[],
}

export const usersSlice = createSlice({
  name: 'users',  
  initialState,
  reducers: {
    setFavoritesUsers: (state, action: PayloadAction<Users[]>) => {
      state.favoritesUsers = action.payload
    },
  },
})

export const { setFavoritesUsers } = usersSlice.actions 

export default usersSlice.reducer 