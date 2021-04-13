import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
    selected: null,
    loading: false,
  },
  reducers: {
      add: ( state, action ) => {
        return {
          ...state,  
          cart: [...state.cart, action.payload]
        }
      },
      remove: ( state, action ) => {
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
      },
      clear: (state, action ) => {
        return { ...state, cart: []}
      },
      selected: (state, action) => {
          state.selected = action.payload;
      }
    
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, clear, selected } = productSlice.actions;
export const selectProduct = state => state.product.selected;
export const selectCart = state => state.product.cart;
export default productSlice.reducer