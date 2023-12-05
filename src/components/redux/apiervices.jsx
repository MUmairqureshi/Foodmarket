// const apiUrl = 'https://custom2.mystagingserver.site/food-stadiumpublic/api/all_product';

// export const fetchProducts = async () => {
//   try {
//     const response = await fetch(apiUrl);

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} - ${response.statusText}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };











// // src/components/ProductList.js
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts } from '../redux/productSlice';
// import { addToCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';

// const ProductList = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.data);
//   const loading = useSelector((state) => state.products.loading);
//   const error = useSelector((state) => state.products.error);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>Product List</h2>
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     dispatch(addToCart(product.id));
//   };

//   const handleIncrement = () => {
//     dispatch(incrementQuantity(product.id));
//   };

//   const handleDecrement = () => {
//     dispatch(decrementQuantity(product.id));
//   };

//   return (
//     <div>
//       <h3>{product.name}</h3>
//       <p>{product.description}</p>
//       <p>Price: {product.price}</p>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//       <button onClick={handleIncrement}>+</button>
//       <span>Quantity: {product.quantity}</span>
//       <button onClick={handleDecrement}>-</button>
//     </div>
//   );
// };

// export default ProductList;
