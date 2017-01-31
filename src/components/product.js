import React from 'react';
import '../styles/modules/product.css';

const Product = (props) => {
  const { product } = props;

  return (
    <div className="product">
      <figure className="product__image-wrapper">
        <img className="product__image" src={product.image} alt={product.name} />
      </figure>
      <button className="product__button button" onClick={() => props.onClick(product.name)}>{product.name} - &pound;{product.price}</button>
    </div>
  );
}

export default Product;