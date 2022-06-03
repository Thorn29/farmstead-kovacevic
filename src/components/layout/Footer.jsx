import React from 'react';
import Menu from '../navigation/Menu';
import LangSwitch from './LangSwitch';
import './Footer.css';

const Footer = (props) => {
  return(
    <footer className='footer'>
    <div className='footer__top'>
    <LangSwitch />
    <Menu type='footer' />
    </div>
    <p className='footer__signature'>Design & Development: <strong>Thorn29 2021</strong></p>
    </footer>
  );
}

export default Footer;
