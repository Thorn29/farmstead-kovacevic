import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { selectCartPrice } from '../../redux/selectors';
import DropdownItem from './DropdownItem';
import ActionButton from '../layout/ActionButton';
import './CartDropdown.css';

const CartDropdown = ({ cart, totalPrice }) => {

  const { t } = useTranslation();

  return(
    <div className='cart-dropdown'>
      <div className='cart-dropdown__list'>
      {cart.length ? cart.map(item => <DropdownItem key={item.id} {...item} />) : <p className='cart-dropdown__empty'>{t('shop.empty')}</p>}
      </div>
      <p className='cart-dropdown__total'>{t('shop.total')}: <strong>{totalPrice} RSD</strong></p>
      {cart.length > 0 && <Link to='/kasa'><ActionButton width='90%'>{t('shop.checkout')}</ActionButton></Link>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    totalPrice: selectCartPrice(state)
  }
}

export default connect(mapStateToProps)(CartDropdown);
