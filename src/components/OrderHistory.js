// src/components/OrderHistory.js
import React, { useState } from 'react';
import '../css/OrderHistory.css'; // Import the CSS file

function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState(JSON.parse(localStorage.getItem('orderHistory') || '[]'));

  const handleCancelOrder = (orderId) => {
    const updatedOrderHistory = orderHistory.filter(order => order.orderId !== orderId);
    setOrderHistory(updatedOrderHistory);
    localStorage.setItem('orderHistory', JSON.stringify(updatedOrderHistory));
  };

  const handleReturnOrder = (orderId) => {
    // Implement return order logic here
    alert(`Order ${orderId} returned`);
  };

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table className="order-history-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Items</th>
              <th>Total Rent</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderHistory.map((order, index) => (
              <tr key={index}>
                <td>{order.orderId}</td>
                <td>
                  {order.items.map((item, idx) => (
                    <div key={idx}>
                      {item.name} ({item.days} days @ ${item.pricePerDay.toFixed(2)} per day)
                    </div>
                  ))}
                </td>
                <td>${order.totalRent.toFixed(2)}</td>
                <td>{order.address}</td>
                <td>
                  <button className="action-button cancel-button" onClick={() => handleCancelOrder(order.orderId)}>Cancel</button>
                  <button className="action-button return-button" onClick={() => handleReturnOrder(order.orderId)}>Return</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistory;