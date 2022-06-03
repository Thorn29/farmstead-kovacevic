import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import * as actionTypes from '../../redux/action-types';
import './CheckoutItem.css';

const CheckoutItem = ({ id, price, img, quantity, increaseQuant, decreaseQuant }) => {

  const { t } = useTranslation();

  const rightClick = () => increaseQuant(id);

  const leftClick = () => decreaseQuant(id);


  return(
    <div className='checkout-item'>
      <img className='checkout-item__image' src={img} alt={t(`shop.${id}`)} />
      <h1 className='checkout-item__name'>{t(`shop.${id}`)}</h1>
      <div className='checkout-item__counter'>
        <button onClick={leftClick} disabled={(quantity === 1) && true } className='checkout-item__arrow'>&#10094;</button>
          <span className='checkout-item__number'>{quantity}</span>
        <button onClick={rightClick} className='checkout-item__arrow'>&#10095;</button>
      </div>
      <p className='checkout-item__price'>{price}<br />RSD</p>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    increaseQuant: (id) => dispatch({ type: actionTypes.INCREASE_QUANT, payload: id}),
    decreaseQuant: (id) => dispatch({ type: actionTypes.DECREASE_QUANT, payload: id}),
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
