import React from 'react';
//import '../styles/modules/product.css';

const ProductDetail = (props) => {
  const { product } = props;

  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}

export default ProductDetail;