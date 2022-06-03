import React from 'react';
import { connect } from 'react-redux';
import { selectCartCount } from '../../redux/selectors';
import './CartIcon.css';

const CartIcon = ({ click, cartCount }) => {
  return(
    <div onClick={click} className='cart-icon'>
      <div className='cart-icon__icon'>
        <span className='cart-icon__number'>{cartCount}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartCount: selectCartCount(state)
  }
}

export default connect(mapStateToProps)(CartIcon);
