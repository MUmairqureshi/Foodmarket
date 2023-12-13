// actions.js
export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST',
  });
  

  export const fetchProductsSuccess = (products) => { 
    const productsWithDefaultQuantity = products.map(product => ({
      ...product,
      quantity: 1,  
    }));
    return {
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: productsWithDefaultQuantity,
    };
  };
  
  export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error,
  });
   
  export const addToCart = (product) => ({
   
    type: 'ADD_TO_CART',
    payload: product,
  
  });
  
  export const incrementQuantity = (productId) => ({
    type: 'INCREMENT_QUANTITY',
    payload: productId,
  });
  
  export const decrementQuantity = (productId) => ({
    type: 'DECREMENT_QUANTITY',
    payload: productId,
  });



  // export const incrementvariationQuantity = (productId) => ({
  //   type: 'INCREMENT_VARIATION_QUANTITY',
  //   payload: productId,
  // });



  export const incrementvariationQuantity = (productId, variationId , quantity) => ({
    type: 'INCREMENT_VARIATION_QUANTITY',
    payload: { productId, quantity },
  });


  export const decrementcariationQuantity = (productId) => ({
    type: 'DECREMENT_QUANTITY',
    payload: productId,
  });


  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  export const fetchProducts = () => {
    return async (dispatch) => {
      dispatch(fetchProductsRequest());
      try {
        const response = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/all_product');
      console.log( " data response" , response)
        const data = await response.json();
        dispatch(fetchProductsSuccess(data?.data));
        console.log( " data" , data)
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };
  

































// // actions.js
// export const fetchProductsRequest = () => ({
//   type: 'FETCH_PRODUCTS_REQUEST',
// });

// export const fetchProductsSuccess = (products) => {
//   const productsWithDefaultQuantity = products.map(product => ({
//     ...product,
//     quantity: 1,
//   }));
//   return {
//     type: 'FETCH_PRODUCTS_SUCCESS',
//     payload: productsWithDefaultQuantity,
//   };
// };
// export const fetchTrendingProductsSuccess = (products) => {
//   const productsWithDefaultQuantity = products.map(product => ({
//     ...product,
//     quantity: 1,
//   }));
//   return {
//     type: 'FETCH_PRODUCTS_SUCCESS',
//     payload: productsWithDefaultQuantity,
//   };
// };
// // 
// export const fetchProductsFailure = (error) => ({
//   type: 'FETCH_PRODUCTS_FAILURE',
//   payload: error,
// });

// export const addToCart = (product) => ({
//   type: 'ADD_TO_CART',
//   payload: product,
// });

// export const incrementQuantity = (productId) => ({
//   type: 'INCREMENT_QUANTITY',
//   payload: productId,
// });

// export const decrementQuantity = (productId) => ({
//   type: 'DECREMENT_QUANTITY',
//   payload: productId,
// });

// export const removeFromCart = (productId) => ({
//   type: 'REMOVE_FROM_CART',
//   payload: productId,
// });

// export const fetchProducts = () => {
//   return async (dispatch) => {
//     dispatch(fetchProductsRequest());
//     try {
//       const [allProductsResponse, trendingProductsResponse] = await Promise.all([
//         fetch('https://custom2.mystagingserver.site/food-stadium/public/api/all_product'),
//         fetch('https://custom2.mystagingserver.site/public/api/trending_product'),
//       ]);

//       const allProductsData = await allProductsResponse.json();
//       const trendingProductsData = await trendingProductsResponse.json();

//       dispatch(fetchProductsSuccess(allProductsData?.data));
//       // You can dispatch another action for trending products if needed.
//       dispatch(fetchTrendingProductsSuccess(trendingProductsData?.data));

//       console.log('All Products Data:', allProductsData);
//       console.log('Trending Products Data:', trendingProductsData);
//     } catch (error) {
//       dispatch(fetchProductsFailure(error.message));
//     }
//   };
// };
