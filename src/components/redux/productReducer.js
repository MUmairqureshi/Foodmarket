// productReducer.js fix productReducer when add  quantity again in to product that add previous increment in the quantity not add again in add to card and add to card 
const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case 'FETCH_PRODUCTS_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          loading: false,
          products: action.payload,
        };
      case 'FETCH_PRODUCTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      case 'DECREMENT_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload
              ? { ...product, quantity: Math.max(0, product.quantity - 1) }
              : product
          ),
        }; 


      // using sigle function update both variation product quantity
      // case 'INCREMENT_VARIATION_QUANTITY':
      //   return {
      //     ...state,
      //     products: state.products.map(product =>
      //       product.id === action.payload.productId
      //         ? {
      //             ...product,
      //             quantity: action.payload.quantity,
      //             variations: product.variations.map(variation =>
      //               variation.id === action.payload.variationId
      //                 ? {
      //                     ...variation,
      //                     quantity: action.payload.quantity,
      //                   }
      //                 : variation
      //             ),
      //           }
      //         : product
      //     ),
      //   };

  //     case 'INCREMENT_VARIATION_QUANTITY':
  // const { productId, quantity } = action.payload;
  // console.log("state productId", productId);
  // console.log("state quantity", quantity);

  // return {
  //   ...state,
  //   products: state.products?.map(product =>
  //     product.id === productId
  //       ? {
  //           ...product,
  //           quantity: quantity,
  //         }
  //       : product
  //   ),

  //   {  console.log(products)}
  // };


  case 'INCREMENT_VARIATION_QUANTITY':
  const { productId, quantity } = action.payload;


  return {
    ...state,
    products: state.products.map(product =>
      product.id === productId
        ? { ...product, quantity: quantity 
        
        }
        : product
    ),
  };
  // const updatedProducts = state.products?.map(product =>
  //   product.id == productId
  //     ? {
  //         ...product,
  //         quantity: product.quantity + 21,
  //       }
  //     : product
  // );

  // console.log('pro', updatedProducts);

  // return {
  //   ...state,
  //   products: updatedProducts,
  // };




//       case 'INCREMENT_VARIATION_QUANTITY':
//   const { productId, quantity } = action.payload;
//   console.log("satteproductId" , productId)
// console.log("statequantity"  , quantity)
//   return {
//     ...state,
//     products: state.products.map(product =>
//       product.id === productId
//         ? {
//             ...product,
//             quantity:  quantity,
//             // variations: product.variations.map(variation =>
//             //   variation.id === action.payload.variationId
//             //     ? {
//             //         ...variation,
//             //         quantity: quantity,
//             //       }
//             //     : variation
//             // ),
//           }
//         : product
//     ),
//   };
      
        case 'DECREMENT_VARIATION_QUANTITY':
          return {
            ...state,
            products: state.products.map(product =>
              product.id === action.payload.productId
                ? {
                    ...product,
                    variations: product.variations.map(variation =>
                      variation.id === action.payload.variationId
                        ? { ...variation, quantity: Math.max(0, variation.quantity - 1) }
                        : variation
                    ),
                  }
                : product
            ),
          };
      default:
        return state;
    }
  };
  
  export default productReducer;
  // take input to user quantity