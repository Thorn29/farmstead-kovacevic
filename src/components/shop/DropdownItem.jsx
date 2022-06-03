import React from 'react';
import { useTranslation } from "react-i18next";
import { connect } from 'react-redux';
import * as actionTypes from '../../redux/action-types';
import './DropdownItem.css';

const DropdownItem = ({ id, price, img, quantity, removeItem }) => {

  const { t } = useTranslation();

  return(
    <div className='dropdown-item'>
      <img className='dropdown-item__image' src={img} alt={t(`shop.${id}`)} />
      <h1 className='dropdown-item__title'>{t(`shop.${id}`)}</h1>
      <span className='dropdown-item__span'>{quantity}</span>
      <span className='dropdown-item__span' onClick={() => removeItem(id)}>&#10005;</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: (id) => dispatch({type: actionTypes.REMOVE_ITEM, payload: id})
  }
}

export default connect(null, mapDispatchToProps)(DropdownItem);
