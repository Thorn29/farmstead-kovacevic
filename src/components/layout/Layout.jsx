import React, { useState } from 'react';
import Banner from './Banner';
import MenuButton from '../navigation/MenuButton';
import MobileMenu from '../navigation/MobileMenu';
import Menu from '../navigation/Menu';
import LangSwitch from './LangSwitch';
import CartIcon from '../shop/CartIcon';
import CartDropdown from '../shop/CartDropdown';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [cartWindow, setCartWindow] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(mobileMenu => !mobileMenu);
  };

  const cartWindowHandler = () => {
    setCartWindow(dropdown => !dropdown);
  };

  return(
    <div className='layout'>
      <Banner/>
      <MenuButton click={mobileMenuHandler} status={mobileMenu} />
      <MobileMenu status={mobileMenu} />
      <Menu type='main' />
      <div className='layout__container'>
        <div className='layout__switch'>
          <LangSwitch />
        </div>
      <CartIcon click={cartWindowHandler} />
      {cartWindow && <CartDropdown />}
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
