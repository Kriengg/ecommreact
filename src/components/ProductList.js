// src/components/ProductList.js
import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, cart, setCart }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;