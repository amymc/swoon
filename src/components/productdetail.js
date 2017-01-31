import React from 'react';
import '../styles/modules/productdetail.css';

const ProductDetail = (props) => {
  const { product } = props;

  return (
    <div className="product-detail">
      <figure className="product-detail__image-wrapper">
        <img className="product-detail__image" src={product.image} alt={product.name}/>
      </figure>
      <div className="product-detail__title-wrapper">
        <h1 className="product-detail__title">{product.name}</h1>
        <p className="product-detail__text">{product.description}</p>
      </div>
      <div className="product-detail__button-wrapper">
        <span className="product-detail__large-text">£{product.price}</span>
        <button className="product-detail__button button button--standard">Add to Cart</button>
      </div>
      <p className="product-detail__text product-detail__text--with-padding">Long description - Donec mollis nisi eget suscipit mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer scelerisque ornare malesuada. Duis tincidunt massa est, nec viverra ligula suscipit id. Sed ac metus suscipit, mollis neque ut, malesuada mauris. Nunc sit amet massa lacus. Praesent pharetra a quam at consequat.</p>
    </div>
  );
}

export default ProductDetail;