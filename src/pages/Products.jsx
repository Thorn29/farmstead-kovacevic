import React, { Fragment } from 'react';
import { useTranslation } from "react-i18next";
import products from '../assets/data/products.js';
import Layout from '../components/layout/Layout';
import LargeProduct from '../components/page/LargeProduct';
import SmallProduct from '../components/page/SmallProduct';
import Head from '../components/Head';

const Products = () => {

  const { t } = useTranslation();

  return(
    <Layout>
    <Head title={t('mainname') === 'Gazdinstvo' || t('mainname') === 'Farmstead' ? t('products.title') : 'Proizvodi'}>Gazdinstvo Kovačević nudi širok asortiman proizvoda, kao što su sirevi, mleko, meso, povrće itd. </Head>
      <h2 className='page-title'>{t('products.title')}</h2>
      <p className='text'>{t('products.p1')}</p>
      {products.large_products.map(cat => {
        return <Fragment key={cat.cat_id}>
        <h1 className='category-title'>{t(`products.${cat.cat_id}`)}</h1>
        <p className='text'>{t(`products.${cat.cat_desc}`)}</p>
        {cat.items.map(item => <LargeProduct key={item.t_id} title={t(`products.${item.t_id}`)} img={item.img}>{t(`products.${item.d_id}`)}</LargeProduct>)}
        </Fragment>
      })}
      {products.small_products.map(cat => {
        return <Fragment key={cat.cat_id}>
        <h1 className='category-title'>{t(`products.${cat.cat_id}`)}</h1>
        <p className='text'>{t(`products.${cat.cat_desc}`)}</p>
        <div className='thumb-gallery'>
        {cat.items.map(item => <SmallProduct key={item.t_id} img={item.img}>{t(`products.${item.t_id}`)}</SmallProduct>)}
        </div>
        </Fragment>
      })}
    </Layout>
  );
}

export default Products;
