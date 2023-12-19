// cartReducer.js
const initialState = {
  items: [],
};


// const updatedItems = state.items.map((item, index) =>
// index === existingProductIndex ? { ...item, quantity: item.quantity + quantity, variation: [...item.variation, ...variation] } : item
// );

// return {
// ...state,
// items: updatedItems,
// };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const quantity = action.payload
      console.log("quantity" , quantity)
      const existingProductIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (existingProductIndex !== -1) {
        // Product already in cart, replace quantity
        const updatedItems = state.items.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: action.payload.quantity } : item
        );

        return {
          ...state,
          items: updatedItems,
        };


      //   const updatedItems = state.items.map((item, index) =>
      //   index === existingProductIndex ? { ...item, quantity: item.quantity + action.payload.quantity, variation: [...item.variation, ...action.payload.variation] } : item
      // );
  
      return {
        ...state,
        items: updatedItems,
      };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload }],
        };
      }
    case 'INCREMENT_QUANTITY_VA':
      const { productId, newQuantity } = action.payload;
      console.log("productId", productId)
      console.log("newQuantity", newQuantity)
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        ),
      };

    case 'REMOVE_FROM_CART':
      const removedProductId = action.payload;
      console.log('Removing product with ID:', removedProductId);
      const removeItems = state.items.filter(item => item.id !== removedProductId);
      console.log('Updated items:', removeItems);
      return {
        ...state,
        items: removeItems,
      };

    // case 'UPDATE_CART_ITEM':
    //   const updatedCartItem = action.payload;
    //   console.log("updatedCartItem" , updatedCartItem)
    //   const updatedItems = state.items.map((item) =>
    //     item.id === updatedCartItem.id
    //       ? { ...item, ...updatedCartItem, variation: [...item.variation, ...updatedCartItem.variation] }
    //       : item
    //   );
    
    //   return {
    //     ...state,
    //     items: updatedItems,
    //   };



    case 'UPDATE_CART_ITEM':
  const updatedCartItem = action.payload;
  const updatedItems = state.items.map((item) =>
    item.id === updatedCartItem.id
      ? {
          ...item,
          quantity: updatedCartItem.quantity,
          variation: updatedCartItem.variation,
        }
      : item
  );

  return {
    ...state,
    items: updatedItems,
  };

    
    default:
      return state;
  }
};

export default cartReducer;


