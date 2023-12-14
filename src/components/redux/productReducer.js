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

      // const { productId } = action.payload;
      // console.log("productId",productId)
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.st + 1 }
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



    case 'INCREMENT_VARIATION_QUANTITY':
    // console.log("productId", product) = action.payload;
    // return {
    //   ...state,
    //   products: state.products.map(product =>
    //     product.id === action.payload
    //       ? { ...product, quantity: product.quantity + 1 }
    //       : product
    //   ),
    // };


    case 'INCREMENT_VARIATION_QUANTITY':
      console.log("state", state)
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
      //           const product = action.payload;
      //           console.log("productpayload" , product.id)
      //           const existingProduct = state.products?.find((item) => item.id === product.id);

      // console.log("existingProduct" , existingProduct)

      //           if (existingProduct) {
      //             // If the product already exists in the state, update its quantity
      //             return state?.products?.map((item) =>
      //               item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      //             );
      //           } else {
      //             // If the product does not exist in the state, add it with quantity 1
      //             return [...state, { ...product, quantity: 1 }];
      //           }


   

    // const { product: targetProduct, value } = action.payload;
    // return {
    //   ...state,
    //   products: state.products.map(product =>
    //     product.id === targetProduct.id
    //       ? { ...product, quantity: value }
    //       : product
    //   ),
    // };


    // case 'INCREMENT_VARIATION_QUANTITY':
    // const { product, value } = action.payload;
    // return {
    //   ...state,
    //   products: state.products.map(product =>
    //     product.id === product.id
    //       ? { ...product, quantity: value}
    //       : product
    //   ),
    // };

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


    //     case 'INCREMENT_VARIATION_QUANTITY':
    //       const { product, value } = action.payload;
    // console.log( product, value  )


    // const exist = state.find((item) => item.id === product.id)
    // if (exist) {
    //   return state.map((x) =>
    //     product.id === product.id ? { ...product, quantity:  value} : product
    //   )
    // }
    // else {
    //   const product = action.payload
    //   return [
    //     ...state,
    //     {
    //       ...product,
    //       quantity: 1
    //     }
    //   ]
    // }



    //   const { product, value } = action.payload;
    // console.log("productstate" , product)
    //   console.log("valuestate", value);

    //   const exist = state.find((item) => item.id === product.id);
    // console.log("exist" , exist)
    //   if (exist) {
    //     return state.map((x) =>
    //       x.id === product.id ? { ...x, quantity: 21 } : x
    //     );
    //   } else {
    //     // Make sure you are not reusing the 'product' variable
    //     const newProduct = action.payload;

    //     return [
    //       ...state,
    //       {
    //         ...newProduct,
    //         quantity: 1,
    //       },
    //     ];
    //   }




    // return {
    //   ...state,
    //   products: state?.products.map(product =>
    //     product.id === productId
    //       ? {
    //         ...product, quantity: value,


    //       }
    //       : product
    //   ),
    // };





    // const {product} = action.payload
    // const exist = state.find((item) => item.id === product.id)
    // if (exist) {
    //   return state.map((x) =>
    //     x.id === product.id ? { ...x, qty: x.qty + 1 } : x
    //   )
    // }
    // else {
    //   const product = action.payload
    //   return [
    //     ...state,
    //     {
    //       ...product,
    //       qty: 1
    //     }
    //   ]
    // }

    // },
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