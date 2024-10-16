// src/components/Checkout.js
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Checkout.css'; // Import the CSS file

function Checkout({ cart = [] }) { // Default to an empty array if cart is undefined
  const location = useLocation();
  const navigate = useNavigate();
  const rentalDates = location.state?.rentalDates || {};
  const quantities = location.state?.quantities || {};

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardName, setCardName] = useState('');
  const [totalRent, setTotalRent] = useState(0);
  const [errors, setErrors] = useState({});
  const [itemDetails, setItemDetails] = useState([]);

  useEffect(() => {
    if (cart.length === 0) return;

    const details = [];
    const total = cart.reduce((sum, item) => {
      const fromDate = new Date(rentalDates[item.id]?.from);
      const toDate = new Date(rentalDates[item.id]?.to);
      const quantity = quantities[item.id] || 1;

      if (isNaN(fromDate) || isNaN(toDate) || fromDate >= toDate) {
        return sum;
      }

      const days = (toDate - fromDate) / (1000 * 60 * 60 * 24);
      const itemTotal = days * item.price * quantity;
      details.push({ ...item, days, quantity, itemTotal });
      return sum + itemTotal;
    }, 0);

    setItemDetails(details);
    setTotalRent(total);
  }, [cart, rentalDates, quantities]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-form">
          <h3>Shipping Address</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pinCode">Pin Code</label>
              <input
                type="text"
                id="pinCode"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <h3>Payment Details</h3>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvc">CVC</label>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardName">Name on Card</label>
              <input
                type="text"
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <button type="submit" className="checkout-button">Place Order</button>
          </form>
        </div>
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <ul>
            {itemDetails.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity} x {item.days} days</span>
                <span>${item.itemTotal.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="total">
            <span>Total Rent:</span>
            <span>${totalRent.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;