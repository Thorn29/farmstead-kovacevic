import React, { Component } from 'react';
import axios from 'axios';
import { withTranslation } from "react-i18next";
import srpski from '../../assets/data/srpski-porudzbina.json';
import { validateCheckout } from '../../assets/validateforms';
import FieldInput from '../other/FieldInput';
import ActionButton from '../layout/ActionButton';

class CheckoutForm extends Component {

  state ={
   inputs: {
     ime: '',
     email: '',
     adresa: '',
     broj: '',
     komentar: ''
   },
   errors: {
     ime: '',
     email: '',
     adresa: '',
     broj: '',
     komentar: ''
   },
   success: false,
   fail: false
  }

  render() {

    const { t, cart, goTo } = this.props;
    const { inputs, errors, success, fail } = this.state;

    const inputHandler = e => {
      this.setState({ inputs: {...inputs, [e.target.name]: e.target.value}})
    }

    const submitHandler = () => {
      const validationError = validateCheckout(inputs);

      if (validationError) {
        return this.setState({ errors: {...errors, [validationError.error]: t(`checkout.${validationError.code}`)}});
      }

        const order = cart.map(item => `${item.quantity} x ${srpski[item.id]}, `).join(' ');

        const fullOrder = {
          ime: inputs.ime,
          email: inputs.email,
          adresa: inputs.adresa,
          broj: inputs.broj,
          porudzbina: order,
          komentar: inputs.komentar ? inputs.komentar : 'nema komentara'
        }

        axios.post('http://gazdinstvo-kovacevic.rs/order.php', fullOrder).then(res => this.setState({ inputs: { ime: '', email: '', poruka: ''}, errors: { ime: '', email: '', poruka: ''}, success: true })).catch(err => this.setState({ errors: { ime: '', email: '', poruka: ''}, fail: true }));
    }

    if (success === true) {
      setTimeout(() => goTo('/prodavnica'), 2000)
      return  (<div className='form-alert'><h4 className='form-alert__text success'>{t('checkout.success')}</h4></div>)
    }

    if (fail === true) {
      setTimeout(() => this.setState({ fail: false }), 2000)
      return  (<div className='form-alert'><h4 className='form-alert__text fail'>{t('checkout.fail')}</h4></div>)
    }

    return(
      <div>
        <FieldInput change={inputHandler} label={t('checkout.f1')} errormsg={errors.ime} type='text' name='ime' required />
        <FieldInput change={inputHandler} label={t('checkout.f2')} errormsg={errors.email} type='email' name='email' required />
        <FieldInput change={inputHandler} label={t('checkout.f3')} errormsg={errors.adresa} type='text' name='adresa' required />
        <FieldInput change={inputHandler} label={t('checkout.f4')} errormsg={errors.broj} type='number' name='broj' required />
        <FieldInput change={inputHandler} label={t('checkout.f5')} errormsg={errors.komentar} type='text' name='komentar' />
        <ActionButton width='90%' click={submitHandler}>{t('checkout.btn')}</ActionButton>
      </div>
    );
  }
}

export default withTranslation()(CheckoutForm);
