import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useTranslation } from "react-i18next";
import ActionButton from '../components/layout/ActionButton';
import Head from '../components/Head';

const About = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();

  return(
    <Layout>
    <Head title={t('error.head')} />
      <h2 className='page-title'>404 {t('error.title')}</h2>
      <p className='text'>{t('error.p1')}</p>
      <ActionButton click={() => navigate(-1)} width='200px'>{t('error.back')}</ActionButton>
    </Layout>
  );
}

export default About;
