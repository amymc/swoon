import React from 'react';
import Product from './product';

const Products = (props) => {
  return (
    <div>
      {props.products.map((product, index) => {
        return <Product key={index} product={product} />
      })}
    </div>
  );
}

export default Products;