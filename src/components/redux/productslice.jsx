// src/redux/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//   const response = await axios.get('https://custom2.mystagingserver.site/food-stadiumpublic/api/all_product');
//   return response.data;
// });

 




export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
   
    try {
      const response = await fetch('https://custom2.mystagingserver.site/food-stadiumpublic/api/all_product');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  });

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.data.find((p) => p.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.data.find((p) => p.id === productId);
      if (product && product.quantity > 0) {
        product.quantity -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { incrementQuantity, decrementQuantity } = productSlice.actions;
export default productSlice.reducer;
