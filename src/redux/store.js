import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})