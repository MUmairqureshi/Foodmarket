// cartReducer.js
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
        }; 










      case 'ADD_TO_CART':
        const { productId, variationId, quantity } = action.payload;
  
        // Check if the product already exists in the cart
        const existingProductIndex = state.items.findIndex((item) => item.product_id === productId);
  
        if (existingProductIndex !== -1) {
          // If the product exists, update the quantity and total price
          return {
            ...state,
            items: state.items.map((item, index) =>
              index === existingProductIndex
                ? {
                    ...item,
                    variations: item.variations.map((variation) =>
                      variation.variation_id === variationId
                        ? {
                            ...variation,
                            quantity: variation.quantity + quantity,
                            total_price: variation.total_price + quantity * variation.price,
                          }
                        : variation
                    ),
                  }
                : item
            ),
          };
        } else {
          // If the product doesn't exist, add a new entry to the cart
          return {
            ...state,
            items: [
              ...state.items,
              {
                product_id: productId,
                total_price: quantity * action.payload.product.price,
                variations: [
                  {
                    variation_id: variationId,
                    quantity: quantity,
                    price: action.payload.product_variation.price,
                    total_price: quantity * action.payload.product_variation.price,
                  },
                ],
              },
            ],
          };
        }
      default:
        return state;
      
    }
    
  };
  
  export default cartReducer;
  


  // case 'ADD_TO_CART':
  //   const { product_id, variations } = action.payload;

  //   // Check if the product already exists in the cart
  //   const existingProductIndex = state.it.findIndex((item) => item.product_id === product_id);

  //   if (existingProductIndex !== -1) {
  //     // Product already exists, update the quantity for each variation
  //     const updatedCart = state.it.map((item) => {
  //       if (item.product_id === product_id) {
  //         item.variations = item.variations || []; // Ensure variations array is defined

  //         variations.forEach((newVariation) => {
  //           const existingVariationIndex =
  //             item.variations.findIndex(
  //               (existingVariation) =>
  //                 existingVariation.variation_id === newVariation.variation_id &&
  //                 existingVariation.item_id === newVariation.item_id
  //             ) || -1; // Ensure existingVariationIndex is defined

  //           if (existingVariationIndex !== -1) {
  //             // Variation already exists, update the quantity
  //             item.variations[existingVariationIndex].quantity += newVariation.quantity;
  //           } else {
  //             // Variation doesn't exist, add it
  //             item.variations.push({
  //               variation_id: newVariation.variation_id,
  //               item_id: newVariation.item_id,
  //               quantity: newVariation.quantity,
  //             });
  //           }
  //         });
  //       }
  //       return item;
  //     });

  //     return {
  //       ...state,
  //       cart: updatedCart,
  //     };
  //   } else {
  //     // Product doesn't exist in the cart, add it
  //     return {
  //       ...state,
  //       cart: [
  //         ...state.it,
  //         {
  //           product_id: product_id,
  //           variations: variations.map((newVariation) => ({
  //             variation_id: newVariation.variation_id,
  //             item_id: newVariation.item_id,
  //             quantity: newVariation.quantity,
  //           })),
  //         },
  //       ],
  //     };
  //   }

  // // Other cases...

  // default:
  //   return state;







  // const { product_id, variations } = action.payload;

  // // Check if the product already exists in the cart
  // const existingProductIndex = state.it?.findIndex(
  //   (item) => item && item.product_id === product_id
  // );

  // if (existingProductIndex !== -1) {
  //   // Product already exists, update the quantity for each variation
  //   const updatedCart = state.it?.map((item) => {
  //     if (item && item.product_id === product_id) {
  //       item.variations = item.variations || []; // Ensure variations array is defined

  //       variations.forEach((newVariation) => {
  //         const existingVariationIndex =
  //           item.variations &&
  //           item.variations.findIndex(
  //             (existingVariation) =>
  //               existingVariation &&
  //               existingVariation.variation_id === newVariation.variation_id &&
  //               existingVariation.item_id === newVariation.item_id
  //           );

  //         if (existingVariationIndex !== -1) {
  //           // Variation already exists, update the quantity
  //           item.variations[existingVariationIndex].quantity += newVariation.quantity;
  //         } else {
  //           // Variation doesn't exist, add it
  //           item.variations.push({
  //             variation_id: newVariation.variation_id,
  //             item_id: newVariation.item_id,
  //             quantity: newVariation.quantity,
  //           });
  //         }
  //       });
  //     }
  //     return item;
  //   });

  //   return {
  //     ...state,
  //     cart: updatedCart,
  //   };
  // } else {
  //   // Product doesn't exist in the cart, add it
  //   return {
  //     ...state,
  //     cart: [
  //       ...state.it,
  //       {
  //         product_id: product_id,
  //         variations: variations.map((newVariation) => ({
  //           variation_id: newVariation.variation_id,
  //           item_id: newVariation.item_id,
  //           quantity: newVariation.quantity,
  //         })),
  //       },
  //     ],
  //   };
  // }
  