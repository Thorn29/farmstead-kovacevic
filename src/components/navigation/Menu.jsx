import React from 'react';
import { useTranslation } from "react-i18next";
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = ({ type }) => {

  const { t } = useTranslation();

  return(
    <div className={`menu ${type}`}>
      <MenuItem to='/'>{t('menu.about')}</MenuItem>
      <MenuItem to='/informacije'>{t('menu.info')}</MenuItem>
      <MenuItem to='/proizvodi'>{t('menu.prod')}</MenuItem>
      <MenuItem to='/prodavnica'>{t('menu.shop')}</MenuItem>
      <MenuItem to='/prodaja_grla'>{t('menu.livest')}</MenuItem>
      <MenuItem to='/kontakt'>{t('menu.cont')}</MenuItem>
    </div>
  );
}

export default Menu;
