import React from 'react';
import Menu from './Menu';
import './MobileMenu.css';

const MobileMenu = ({ status }) => {
  return(
    <div className={status ? 'mobile-menu mobile-menu--active' : 'mobile-menu'}>
      <Menu type='mobile' />
    </div>
  );
}

export default MobileMenu;
