// reducers/productReducer.js
import { createSlice } from '@reduxjs/toolkit';
 
const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductsSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchProductsPending: (state) => {
      state.loading = true;
    },
    fetchProductsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.data.find((p) => p.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      const product = state.data.find((p) => p.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
});

export const {
  fetchProductsSuccess,
  fetchProductsPending,
  fetchProductsError,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
