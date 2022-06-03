import React from 'react';
import './MenuButton.css';

const MenuButton = ({ click, status }) => {
  return(
    <div className={status ? 'menu-button menu-button--active' : 'menu-button'} onClick={click}>
      <span className='menu-button__line' />
      <span className='menu-button__line' />
      <span className='menu-button__line' />
      <span className='menu-button__line' />
    </div>
  );
}

export default MenuButton;
