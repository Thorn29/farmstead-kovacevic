import React from 'react';
import { useTranslation } from "react-i18next";
import GoogleMap from './GoogleMap';
import './ContactBox.css';

const ContactBox = () => {

  const { t } = useTranslation();

  return(
    <div className='contact-box'>
      <div className='contact-box__data'>
        <h4 className='contact-box__title'>{t('contact.t1')}</h4>
        <p className='contact-box__text'>+381 22-557-976</p>
        <p className='contact-box__text'>+381 64-91-222-60</p>
        <p className='contact-box__text'>+381 64-22-91-626</p>
        <h4 className='contact-box__title'>E-Mail</h4>
        <p className='contact-box__text'>farma.koza.kovacevic@hotmail.com</p>
      </div>
      <div className='contact-box__data'>
      <h4 className='contact-box__title'>Golubinačka 30a, 22320 Inđija</h4>
      <GoogleMap />
      </div>
    </div>
  );
}

export default ContactBox;
