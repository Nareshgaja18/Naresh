import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, decrementQuantity, incrementQuantity, removeFromCart } from "./store";
import "./App.css"

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [message, setMessage] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);

  const discountMultipliers = {
    10: 0.1,
    20: 0.2,
    30: 0.3,
  };

  const calculatePrices = () => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const buttonDiscountAmount = total * (discountMultipliers[discount] || 0);
    const couponDiscountAmount = total * (couponDiscount / 100);
    const totalDiscount = buttonDiscountAmount + couponDiscountAmount;
    const finalPrice = total - totalDiscount;

    return { total, totalDiscount, finalPrice };
  };

  const applyCoupon = () => {
    const discountMapping = {
      Naresh10: 10,
      Naresh20: 20,
      Naresh30: 30,
    };
    
    if (discountMapping[couponCode]) {
      setCouponDiscount(discountMapping[couponCode]);
      setMessage(`${discountMapping[couponCode]}% coupon discount applied successfully!`);
    } else {
      setCouponDiscount(0);
      setMessage("Coupon code is not applied. Please check again.");
    }
  };

  const { total, totalDiscount, finalPrice } = calculatePrices();

  // Discount Summary Component
  const discountSummary = (
    <div>
      <h3>Discount Summary</h3>
      <p>Total Amount Before Discount: ${total.toFixed(2)}</p>
      <p>Original Discount Amount: ${(total * (discountMultipliers[discount] || 0)).toFixed(2)}</p>
      <p>Coupon Discount Amount: ${(total * (couponDiscount / 100)).toFixed(2)}</p>
      <p>Combined Discount Amount: ${totalDiscount.toFixed(2)}</p>
      <p>Final Amount After Discount: ${finalPrice.toFixed(2)}</p>
    </div>
  );

  return (
    <>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.name}>
                <p>
                  {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
                  <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                  <button onClick={() => dispatch(decrementQuantity(item))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                </p>
              </li>
            ))}
          </ul>

          {/* Discount Button Section */}
          <div>
            <h3>Apply Discount</h3>
            <button onClick={() => setDiscount(10)}>Apply 10% Discount</button>
            <button onClick={() => setDiscount(20)}>Apply 20% Discount</button>
            <button onClick={() => setDiscount(30)}>Apply 30% Discount</button>
          </div>

          {/* Coupon Code Section */}
          <div>
            <h3>Apply Coupon Code</h3>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
            />
            <button onClick={applyCoupon}>Apply Coupon</button>
            {message && <p>{message}</p>}
          </div>

          {/* Render Discount Summary */}
         <h2> {discountSummary}</h2>

          {/* Clear Cart Button */}
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </>
  );
};

export default Cart;
