// ProductList.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  addToCart,
  fetchProducts,
} from './actions';

const ProductList = ({
  products,
  cart,
  error,
  fetchProducts,
  increment,
  decrement,
  addToCart,
}) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => increment(product.id)}>Increment</button>
          <button onClick={() => decrement(product.id)}>Decrement</button>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
        </div>
      ))}

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  increment: (productId) => dispatch(incrementQuantity(productId)),
  decrement: (productId) => dispatch(decrementQuantity(productId)),
  addToCart: (productId) => dispatch(addToCart(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
