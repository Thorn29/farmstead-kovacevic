import React from 'react';
import Layout from '../components/layout/Layout';
import { Trans, useTranslation } from "react-i18next";
import ImgTextBox from '../components/page/ImgTextBox';
import Head from '../components/Head';

import Img1 from '../assets/images/drinkmilk.jpg';
import Img2 from '../assets/images/milkcookies.jpg';
import Img3 from '../assets/images/girl.jpg';

const Information = () => {

  const { t } = useTranslation();

  return(
      <Layout>
      <Head title={t('mainname') === 'Gazdinstvo' || t('mainname') === 'Farmstead' ? t('info.title') : 'Informacije'}>O kozijem mleku kruže razne informacije. Neke od njih su tačne, a neke su plod raznih zabluda i pogrešnih interpretacija.</Head>
        <h2 className='page-title'>{t('info.title')}</h2>
        <p className='text'><Trans i18nKey='info.p1' components={[<strong/>]} /></p>
        <ImgTextBox img={Img1}><Trans i18nKey='info.p2' components={[<strong/>]} /></ImgTextBox>
        <p className='text'><Trans i18nKey='info.p3' components={[<strong/>]} /></p>
        <ImgTextBox img={Img2} classadd='reverse'><Trans i18nKey='info.p4' components={[<strong/>]} /></ImgTextBox>
        <ImgTextBox img={Img3}><Trans i18nKey='info.p5' components={[<strong/>]} /></ImgTextBox>
        <p className='text'><Trans i18nKey='info.p6' components={[<strong/>]} /></p>
        <p className='text'><Trans i18nKey='info.p7' components={[<strong/>]} /></p>
      </Layout>
  );
}

export default Information;
