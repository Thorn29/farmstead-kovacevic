import React from 'react';
import Layout from '../components/layout/Layout';
import { Trans, useTranslation } from "react-i18next";
import ImgTextBox from '../components/page/ImgTextBox';
import Head from '../components/Head';

import Img1 from '../assets/images/alpinakoza.jpg';
import Img2 from '../assets/images/sanskakoza.jpg';
import Img3 from '../assets/images/balkanskakoza.jpg';
import Img4 from '../assets/images/swissfarm.jpg';
import Img5 from '../assets/images/bale.jpg';
import Img6 from '../assets/images/balerolo.jpg';
import Img7 from '../assets/images/balefolija.jpg';
import Img8 from '../assets/images/natproducts.jpg';

const About = () => {

  const { t } = useTranslation();

  return(
    <Layout>
    <Head title={t('mainname') === 'Gazdinstvo' || t('mainname') === 'Farmstead' ? t('about.title') : 'O Nama'}>Gazdinstvo koza Kovačević iz Inđije bavi se kozarstvom na organski način preko 30 godina. Na našem gazdinstvu su zastupljene tri rase koza, a to su: Francuska Alpina, Bela Sanska Koza i Domaća Balkanska Koza.</Head>
      <h2 className='page-title'>{t('about.title')}</h2>
      <p className='text'>{t('about.p1')}</p>
      <p className='text'><Trans i18nKey='about.p2' components={[<strong />]} /></p>
      <div className='thumb-gallery'>
        <img src={Img1} alt='Francuska alpina' />
        <img src={Img2} alt='Sanska koza' />
        <img src={Img3} alt='Balkanska koza' />
      </div>
      <p className='text'>{t('about.p3')}</p>
      <p className='text'><Trans i18nKey='about.p4' components={[<strong />]} /></p>
      <p className='text'><strong>{t('about.p5')}</strong></p>
      <ImgTextBox img={Img4}><Trans i18nKey='about.p6' components={[<strong />]} /></ImgTextBox>
      <p className='text'>{t('about.p7')}</p>
      <div className='thumb-gallery'>
        <img src={Img5} alt='Bale' />
        <img src={Img6} alt='Rolo bale' />
        <img src={Img7} alt='Bale u streč foliji' />
      </div>
      <p className='text'>{t('about.p8')}</p>
      <p className='text'>{t('about.p9')}</p>
      <ImgTextBox img={Img8} classadd='reverse'><Trans i18nKey='about.p10' components={[<strong />]} /></ImgTextBox>
      <p className='text'>{t('about.p11')}</p>
    </Layout>
  );
}

export default About;
