import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuItem.css';

const MenuItem = ({ to, children }) => {
  return(
    <NavLink to={to} className='menu-item'>
      {children}
    </NavLink>
  );
}

export default MenuItem;
