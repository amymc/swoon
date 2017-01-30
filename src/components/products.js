import React from 'react';
import Product from './product';
import '../styles/modules/products.css';

const Products = (props) => {
  return (
    <div className='products'>
      {props.products.map((product, index) => {
        return <Product key={index} product={product} />
      })}
    </div>
  );
}

export default Products;