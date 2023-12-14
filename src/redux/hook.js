import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    Add: (state, action) => {
      const product = action.payload
      const exist = state.find((item) => item.id === product.id)
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      }
      else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1
          }
        ]
      }

    },

    Increment: (state, action) => {


      const product = action.payload
      const exist = state.find((item) => item.id === product.id)
      if (exist) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        )
      }
      else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1
          }
        ]
      }

    },


    Decrement: (state, action) => {
      const product = action.payload
      const exist = state.find((x) => x.id === product.id)
      if (exist) {
        return state.map((x) =>

          x.id === product.id ? { ...x, qty: x.qty - 1 } : x


        )
      }
      else {
        const product = action.payload
        return [
          ...state,
          {
            ...product,
            qty: 1
          }
        ]
      }
    },


    Remove: (state, action) => {
      return state.filter((product) => product.id !== action.payload);

      return state;



    }
  }
})


export const { Increment, Decrement, Add, Remove } = counterSlice.actions

export default counterSlice.reducer