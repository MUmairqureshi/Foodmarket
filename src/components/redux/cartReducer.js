// cartReducer.js
const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
        const existingProductIndex = state.items.findIndex((item) => item.id === action.payload.id);
  
        if (existingProductIndex !== -1) {
          // Product already in cart, update quantity
          const updatedItems = state.items.map((item, index) =>
            index === existingProductIndex ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          );
  
          return {
            ...state,
            items: updatedItems,
          };
        } else {
          // Product not in cart, add it
          return {
            ...state,
            items: [...state.items, action.payload],
          };
        }

    // case 'INCREMENT_QUANTITY_VA':
    //   return {
    //     ...state,
    //     items: state.items.map((item) =>
    //       item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
    //     ),
    //   }
    
    case 'INCREMENT_QUANTITY_VA':
      const { productId, newQuantity } = action.payload;
      console.log("productId" ,  productId)
      console.log("newQuantity" ,  newQuantity)
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        ),
      };


    // case 'DECREMENT_QUANTITY':
    //   return {
    //     ...state,
    //     items: state.items.map((item) =>
    //       item.id === action.payload ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    //     ),
    //   };

    default:
      return state;
  }
};

export default cartReducer;


