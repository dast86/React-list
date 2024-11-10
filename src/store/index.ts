
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import usersSlice from "./slice/usersSlice"

export const store = configureStore({
  reducer: {
    usersStore: usersSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
