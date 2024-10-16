import React, { useState } from 'react';
import '../css/Home.css'; // Import the CSS file
import sampleProducts from '../data/sampleProducts'; // Import sample products
import heroImage from '../images/hero-image.jpg'; // Import the image

function Home({ cart = [], setCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = sampleProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const filteredProducts = sampleProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="hero-image">
        <img src={heroImage} alt="Hero" />
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search Products"
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((suggestion) => (
                <li key={suggestion.id} onClick={() => setSearchQuery(suggestion.name)}>
                  {suggestion.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">Price: ${product.price}</p>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;