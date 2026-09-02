import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Produto } from '../../model/Produto'

type CartState = {
  items: Produto[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Produto>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
  },
})

export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
