// src/components/ProductItem.js
import React, { useState } from 'react';

function ProductItem({ product, cart, setCart }) {
  const [availability, setAvailability] = useState(true);
  const [rentDates, setRentDates] = useState({ from: '', to: '' });

  const addToCart = () => {
    setCart([...cart, { ...product, rentDates }]);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {availability ? 'Available' : 'Not Available'}</p>
      {availability && (
        <div>
          <input
            type="date"
            value={rentDates.from}
            onChange={(e) => setRentDates({ ...rentDates, from: e.target.value })}
          />
          <input
            type="date"
            value={rentDates.to}
            onChange={(e) => setRentDates({ ...rentDates, to: e.target.value })}
          />
          <button onClick={addToCart}>Rent</button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;