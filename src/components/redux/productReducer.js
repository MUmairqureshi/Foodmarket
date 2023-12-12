// productReducer.js fix productReducer when add  quantity again in to product that add previous increment in the quantity not add again in add to card and add to card 
const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    
    console.log("state" , state)
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
        case 'UPDATE_VARIATION_QUANTITY':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.productId
            ? {
                ...product,
                quantity: product.quantity + 1,
                variation: product.variation.map(variation =>
                  variation.id === action.payload.variationId
                    ? { ...variation, quantity: action.payload.quantity }
                    : variation
                ),
              }
            : product
        ),
      };


      // using sigle function update both variation product quantity
      case 'INCREMENT_VARIATION_QUANTITY':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.productId
              ? {
                  ...product,
                  quantity: action.payload.quantity,
                  variations: product.variations.map(variation =>
                    variation.id === action.payload.variationId
                      ? {
                          ...variation,
                          quantity: action.payload.quantity,
                        }
                      : variation
                  ),
                }
              : product
          ),
        };
      
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