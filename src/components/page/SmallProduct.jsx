import React from 'react';
import './SmallProduct.css';

const SmallProduct = ({ img, children }) => {
  return(
    <div className='small-product'>
      <img className='small-product__image' src={img} alt={children} />
      <h1 className='small-product__title'>{children}</h1>
    </div>
  );
}

export default SmallProduct;
