import { configureStore } from '@reduxjs/toolkit'
import api from '../services/restaurantesApi'
import cartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddeware) =>
    getDefaultMiddeware().concat(api.middleware),
})

export type RootReducer = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
