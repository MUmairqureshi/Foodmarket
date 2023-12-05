// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const existingProduct = state.find((item) => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ id: productId, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
