import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import './Banner.css';

import Mountains from '../../assets/images/mountains.png';
import Grass from '../../assets/images/grass.png';

const Banner = () => {

 const [offset, setOffset] = useState(0);

 useEffect(() => {
   const handleScroll = () => setOffset(window.pageYOffset);

   window.addEventListener('scroll', handleScroll);

   return () => window.removeEventListener('scroll', handleScroll);
 }, [offset]);

  const { t } = useTranslation();

  return(
    <div className='banner'>
      <span className='banner__mountains' style={{transform: `translateY(${offset * 0.1}px)`, backgroundImage: `url(${Mountains})`}}/>
      <span style={{backgroundImage: `url(${Grass})`}} className='banner__grass' />
      <h1 className='banner__logo' style={{transform: `translateY(${offset * 0.3}px)`}}>{t('mainname')} Kovačević</h1>
      <span className='banner__fence' style={{transform: `translateY(${offset * -0.09}px)`}}/>
    </div>
  );
}

export default Banner;
