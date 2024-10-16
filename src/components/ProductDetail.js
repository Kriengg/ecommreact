import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { useParams } from 'react-router-dom';
import '../css/ProductDetail.css'; // Import the CSS file

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product-detail">
      <Zoom>
        <img src={product.image} alt={product.name} className="product-image" />
      </Zoom>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <p className="availability">Availability: {product.availability ? 'Available' : 'Not Available'}</p>
    </div>
  );
}

export default ProductDetail;