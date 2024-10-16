import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ProductItem({ product, cart, setCart }) {
  const [availability, setAvailability] = useState(true);
  const [rentDates, setRentDates] = useState({ from: '', to: '' });
  const history = useHistory();

  const addToCart = () => {
    setCart([...cart, { ...product, rentDates }]);
  };

  const viewDetails = () => {
    history.push(`/product/${product.id}`);
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} className="product-image" onClick={viewDetails} style={{ cursor: 'pointer' }} />
      <h3 onClick={viewDetails} style={{ cursor: 'pointer' }}>{product.name}</h3>
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