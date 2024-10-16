// src/components/OrderConfirmation.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function OrderConfirmation() {
  const location = useLocation();
  const { orderId } = location.state;

  return (
    <div>
      <h2>Order Confirmation</h2>
      <p>Thank you for your order!</p>
      <p>Your order ID is: {orderId}</p>
      <p>You will receive an email confirmation shortly.</p>
    </div>
  );
}

export default OrderConfirmation;