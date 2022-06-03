import React, { Component } from 'react';
import axios from 'axios';
import { withTranslation } from "react-i18next";
import { validateContact } from '../../assets/validateforms';
import FieldInput from './FieldInput';
import ActionButton from '../layout/ActionButton';
import './ContactForm.css';

class ContactForm extends Component {

  state={
   inputs: {
     ime: '',
     email: '',
     poruka: ''
   },
   errors: {
     ime: '',
     email: '',
     poruka: ''
   },
   success: false,
   fail: false
  };

  render() {

    const { t } = this.props;
    const { inputs, errors, success, fail } = this.state;

    const inputHandler = e => {
      this.setState({ inputs: {...inputs, [e.target.name]: e.target.value}})
    }

    const submitHandler = () => {
      const validationError = validateContact(inputs);

      if (validationError) {
        return this.setState({ errors: {...errors, [validationError.error]: t(`checkout.${validationError.code}`)}})
      }

        axios.post('http://gazdinstvo-kovacevic.rs/send.php', inputs).then(res => this.setState({ inputs: { ime: '', email: '', poruka: ''}, success: true })).catch(err => this.setState({ fail: true }));
        this.setState({errors: { ime: '', email: '', poruka: ''}})
    }

    if (success === true) {
      setTimeout(() => this.setState({ success: false}), 2000)
      return  (<div className='form-alert'><h4 className='form-alert__text success'>{t('contact.success')}</h4></div>)
    }

    if (fail === true) {
      setTimeout(() => this.setState({ fail: false}), 2000)
      return  (<div className='form-alert'><h4 className='form-alert__text fail'>{t('checkout.fail')}</h4></div>)
    }

    return(
      <div className='contact-form'>
        <h4 className='small-title'>{t('contact.t2')}</h4>
        <FieldInput change={inputHandler} label={t('contact.ff1')} errormsg={errors.ime} type='text' name='ime' required />
        <FieldInput change={inputHandler} label={t('contact.ff2')} errormsg={errors.email} type='email' name='email' required />
        <FieldInput change={inputHandler} label={t('contact.ff3')} errormsg={errors.poruka} type='text' name='poruka' required />
        <ActionButton click={submitHandler} width='85%'>{t('contact.ff4')}</ActionButton>
      </div>
    );
  }

}

export default withTranslation()(ContactForm);
