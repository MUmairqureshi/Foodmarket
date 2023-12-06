// App.js
import React, { useState, useEffect } from 'react';
import Product from './Product';
import Cart from './Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from your API
    fetch('your_api_endpoint')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const cartItem = updatedCart.find((item) => item.id === product.id);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);
  };

  return (
    <div>
      <h1>React Shopping Cart</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart
        cart={cart}
        onIncrement={incrementQuantity}
        onDecrement={decrementQuantity}
      />
    </div>
  );
};

export default App;
