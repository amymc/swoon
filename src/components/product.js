import React from 'react';
import '../styles/modules/product.css';

const Product = (props) => {
  const { product } = props;

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <p>{product.name} - &pound;{product.price}</p>
    </div>
  );
}

export default Product;