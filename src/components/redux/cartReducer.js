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
      
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        ),
      };

    case 'REMOVE_FROM_CART':
      const removedProductId = action.payload;
      
      const removeItems = state.items.filter(item => item.id !== removedProductId);
 
      return {
        ...state,
        items: removeItems,
      };

      case 'INCREMENT_QUANTITY_incart':
        return {
          ...state,
          items: state.items.map(product =>
            product.id === action.payload
              ? { ...product, quantity: product?.quantity + 1 }
              : product
          ),
        };
        case 'DECREMENT_QUANTITY_incart':
          return {
            ...state,
            items: state.items.map(product =>
              product.id === action.payload
                ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                : product
            ),
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


