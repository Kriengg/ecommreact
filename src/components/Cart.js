// src/components/Cart.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart.css'; // Import the CSS file

function Cart({ cart, setCart }) {
  const [rentalDates, setRentalDates] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = { from: '', to: '' };
      return acc;
    }, {})
  );
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleDateChange = (productId, field, value) => {
    setRentalDates({
      ...rentalDates,
      [productId]: {
        ...rentalDates[productId],
        [field]: value,
      },
    });
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities({
      ...quantities,
      [productId]: value,
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleProceedToCheckout = () => {
    const newErrors = {};
    let hasErrors = false;

    Object.keys(rentalDates).forEach(productId => {
      const { from, to } = rentalDates[productId];
      if (!from || !to) {
        newErrors[productId] = 'Please select both dates';
        hasErrors = true;
      } else if (new Date(from) >= new Date(to)) {
        newErrors[productId] = 'End date must be after start date';
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      navigate('/checkout', { state: { rentalDates, quantities } });
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>From</th>
              <th>To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id]}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={rentalDates[item.id].from}
                    onChange={(e) => handleDateChange(item.id, 'from', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={rentalDates[item.id].to}
                    onChange={(e) => handleDateChange(item.id, 'to', e.target.value)}
                  />
                </td>
                <td>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                  {errors[item.id] && <p className="error-message">{errors[item.id]}</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cart.length > 0 && (
        <button className="checkout-button" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      )}
    </div>
  );
}

export default Cart;