import React from 'react';
import '../styles/modules/product.css';

const Product = (props) => {
  const { product } = props;

  return (
    <div className="product" onClick={() => props.onClick(product.name)}>
      <figure className="product__image-wrapper">
        <img className="product__image" src={product.image} alt={product.name} />
      </figure>
      <button className="product__button button">{product.name} - &pound;{product.price}</button>
    </div>
  );
}

export default Product;