import React from 'react';
import i18n from '../../i18n';
import './LangSwitch.css';

import Flag1 from '../../assets/images/srb.jpg';
import Flag2 from '../../assets/images/eng.jpg';

const LangSwitch = ({ language, dispatch }) => {

  const languageSwitchHandler = () => {
    if (i18n.language === 'sr') {
      i18n.changeLanguage('en');
    }

    else {
      i18n.changeLanguage('sr');
    }
  };

  return(
    <div onClick={() => languageSwitchHandler('en')} className='lang-switch'>
    <img className='lang-switch__img' src={i18n.language === 'sr' ? Flag2 : Flag1} alt='flag' />
    <p className='lang-switch__text'>{i18n.language === 'sr' ? 'English' : 'Srpski'}</p>
    </div>
  );
}

export default LangSwitch;
