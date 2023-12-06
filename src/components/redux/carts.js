// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
