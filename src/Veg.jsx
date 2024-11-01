import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from './store'

function Veg() {

const dispatch=useDispatch()
    const vegProducts=useSelector(state=>state.products.veg)

    const items=vegProducts.map((product,index)=>(<li key={index}>
                                           {product.name}-${product.price.toFixed(2)}
                                           <button onClick={()=>dispatch(removeFromCart(product))}>Remove to Cart</button>
    
                                         <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
                                  
    
    
    </li>))
  return (
    <>
    <h2>Veg products</h2>
<ul>{items}</ul>      
    </>
  )
}

export default Veg;



// import React from 'react';
// import { useSelector } from 'react-redux';

// function Veg() {
//   // Access the veg products from the Redux store's state
//   const vegProducts = useSelector(state => state.products.Veg);

//   // Map over vegProducts to create list items for each product
//   const items = vegProducts.map((product, index) => (
//     <li key={index}>
//       {product.name} - ${product.price.toFixed(2)}
//       <button>Add to cart</button>
//     </li>
//   ));

//   return (
//     <>
//       <h2>Veg Products</h2>
//       <ul>{items}</ul>      
//     </>
//   );
// }

// export default Veg;

