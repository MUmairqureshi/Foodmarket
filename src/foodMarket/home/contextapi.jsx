 import { createContext, useContext, useState } from 'react'


const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)
console.log(setQty)
console.log(qty)

  const onAdd = (product, quantity) => {

    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    )

     setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

     if (checkProductInCart) {
       const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          }
      })


      setCartItems(updatedCartItems)
    } else {
 
      product.quantity = quantity


      setCartItems([...cartItems, { ...product }])
    }
}

  const toggleCartItemQuantity = (id, value) => {
    const index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = [...cartItems] 

    if (value === 'inc') {
      const foundProduct = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity + 1,
      } 
            newCartItems.splice(index, 1, foundProduct) 
      setCartItems(newCartItems)
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)
    } else if (value === 'dec') {
      if (newCartItems[index].quantity > 1) {
        const foundProduct = {
          ...newCartItems[index],
          quantity: newCartItems[index].quantity - 1,
        }
        newCartItems.splice(index, 1, foundProduct)
        setCartItems(newCartItems)
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1)
      }
    }
  }

  const removeCartItem = (id) => {
    const index = cartItems.findIndex((product) => product._id === id)
    const newCartItems = [...cartItems]
    const foundProduct = newCartItems[index]
    newCartItems.splice(index, 1)
    setCartItems(newCartItems)
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    )
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    )
    

  }

  const incQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {

      return prevQty <= 1 ? 1 : prevQty - 1
    })
  }

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        totalPrice,
        setTotalPrice,
        totalQuantities,
        setTotalQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        removeCartItem,
      }}
    >
      {children}
    </Context.Provider>
  )
}


export const useStateContext = () => useContext(Context)