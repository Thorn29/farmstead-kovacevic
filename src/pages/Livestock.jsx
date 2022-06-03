import React from 'react';
import { useTranslation } from "react-i18next";
import Layout from '../components/layout/Layout';
import Head from '../components/Head';

import Jarac from '../assets/images/jarac.jpg';
import Jarac2 from '../assets/images/jarac1.jpg';
import Konj from '../assets/images/konj.jpg';
import Konj2 from '../assets/images/konj1.jpg';

const Livestock = () => {

  const { t } = useTranslation();

  return(
    <Layout>
    <Head title={t('mainname') === 'Gazdinstvo' || t('mainname') === 'Farmstead' ? t('livestock.title') : 'Prodaja grla'}>Pored prehrambenih proizvoda, prodajemo i životinje, ovde možete pogledati trenutnu ponudu</Head>
      <h2 className='page-title'>{t('livestock.title')}</h2>
      <h4 className='small-title'>{t('livestock.t1')}</h4>
      <div className='thumb-gallery'>
      <img src={Jarac} alt='Priplodni jarac' />
      <img src={Jarac2} alt='Temp' />
      </div>
      <p className='text'>{t('livestock.p1')}</p>
      <h4 className='small-title'>{t('horses.t1')}</h4>
      <div className='thumb-gallery'>
      <img src={Konj} alt='Šetlandski poni pastuv'/>
      <img src={Konj2} alt='Šetlandski poni pastuv'/>
      </div>
      <p className='text'>{t('horses.p1')}</p>
    </Layout>
  );
}

export default Livestock;
