import React from 'react';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/action-types';
import ActionButton from '../layout/ActionButton';
import './ShopItem.css';

const ShopItem = ({ id, price, img, addItem }) => {

  const { t } = useTranslation();

  return(
    <div className='shop-item'>
      <img className='shop-item__image' src={img} alt={t(`shop.${id}`)} />
      <h1 className='shop-item__title'>{t(`shop.${id}`)}</h1>
      <h4 className='shop-item__price'>{price} RSD</h4>
      <ActionButton width='100%' click={() => addItem({ id: id, price: price, img: img, quantity: 1 })}>{t('shop.button')}</ActionButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (payload) => dispatch({ type: actionTypes.ADD_ITEM, payload})
  }
};

export default connect(null, mapDispatchToProps)(ShopItem);
