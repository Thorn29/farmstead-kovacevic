import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from "react-i18next";
import Layout from '../components/layout/Layout';
import shopitems from '../assets/data/shop.js';
import ShopItem from '../components/shop/ShopItem';
import Head from '../components/Head';

const Component = (props) => {

  const { t } = useTranslation();

  return(
    <Layout>
      <Head title={t('mainname') === 'Gazdinstvo' || t('mainname') === 'Farmstead' ? t('shop.title') : 'Prodavnica'}>Neke od proizvoda sa naše farme možete poručiti direktno putem interneta, ovde možete pronaći kompletan spisak</Head>
      <h2 className='page-title'>{t('shop.title')}</h2>
      <p className='text'><Trans i18nKey='shop.p1' components={[<br/>, <Link to='/kontakt' />]} /></p>
      <p className='text'>{t('shop.p2')}</p>
      <div className='thumb-gallery'>
        {shopitems.map(item => <ShopItem key={item.id} {...item}  />)}
      </div>
    </Layout>
  );
}

export default Component;
