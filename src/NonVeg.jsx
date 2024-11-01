import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './store';

function NonVeg() {
  const dispatch = useDispatch();

  // Ensure the selector matches the structure of your Redux store
  const nonVeg = useSelector(state => state.products.nonveg);

  // Map through the nonVeg items and create list elements
  const list = nonVeg.map((product, index) => (
    <li key={index}>
      {product.name} - ${product.price.toFixed(2)}
      <button onClick={() => dispatch(removeFromCart(product))}>Remove from Cart</button>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </li>
  ));

  return (
    <>
      <h2>NonVeg Items</h2>
      <ul>{list}</ul>
    </>
  );
}

export default NonVeg;
