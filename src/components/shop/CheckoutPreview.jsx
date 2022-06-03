import React from 'react';
import { useTranslation } from 'react-i18next';
import CheckoutItem from './CheckoutItem';
import './CheckoutPreview.css';

const CheckoutPreview = ({ cart, cartPrice }) => {

  const { t } = useTranslation();

  return(
    <div className='checkout-preview'>
      {cart.map(item => <CheckoutItem key={item.id} {...item} />)}
      <p className='checkout-preview__price'>{t('checkout.s1')}: <strong>{cartPrice} RSD</strong></p>
    </div>
  );
}

export default CheckoutPreview;
