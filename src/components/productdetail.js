import React from 'react';
//import '../styles/modules/product.css';

const ProductDetail = (props) => {
  const { product } = props;

  return (
    <div>
      <img src={product.image} alt={product.name}/>
      <h1>{product.name}</h1>
      <span>£{product.price}</span>
      <button className="button button--standard">Add to Cart</button>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;