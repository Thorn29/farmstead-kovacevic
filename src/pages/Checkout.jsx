import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import { selectCartCount, selectCartPrice } from '../redux/selectors';
import CheckoutPreview from '../components/shop/CheckoutPreview';
import CheckoutForm from '../components/shop/CheckoutForm';
import Head from '../components/Head';

const Checkout = ({ cart, cartCount, cartPrice }) => {

  const { t } = useTranslation();
  const navigate = useNavigate();

    if (cartCount === 0) return <Navigate to='/prodavnica' />;
    return(
      <div className='page-special'>
      <Head title={t('checkout.title')} />
        <div className='window-special'>
        <h4 className='small-title'>{t('checkout.t1')}</h4>
        <CheckoutPreview cart={cart} cartPrice={cartPrice} />
        <h4 className='small-title'>{t('checkout.t2')}</h4>
        <CheckoutForm cart={cart} goTo={navigate} />
        <p className='text small'>{t('checkout.s2')}</p>
        </div>
      </div>
    );
};

const mapStateToProps = state => {
   return {
     cart: state.cart,
     cartCount: selectCartCount(state),
     cartPrice: selectCartPrice(state)
   }
 }
export default connect(mapStateToProps)(Checkout);
