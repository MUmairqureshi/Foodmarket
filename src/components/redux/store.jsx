// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productslice';
import cartReducer from '../redux/createslice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
