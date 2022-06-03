import React from 'react';
import './LargeProduct.css';

const LargeProduct = ({ title, img, children}) => {
  return(
    <div className='large-product'>
      <img className='large-product__image' src={img} alt={title} />
      <div className='large-product__info'>
        <h1 className='large-product__title'>{title}</h1>
        <p className='text'>{children}</p>
      </div>
    </div>
  );
}

export default LargeProduct;
