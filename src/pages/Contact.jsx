import React from 'react';
import { useTranslation } from "react-i18next";
import Layout from '../components/layout/Layout';
import ContactBox from '../components/other/ContactBox';
import ContactForm from '../components/other/ContactForm';
import Head from '../components/Head';

const Contact = (props) => {

  const { t } = useTranslation();

  return(
    <Layout>
      <Head title={t('mainname') === 'Gazdinstvo' || t('mainname') === 'Farmstead' ? t('contact.title') : 'Kontakt'}>Kontaktirajte nas putem e-maila, telefona, ili nas posetite na adresi</Head>
      <h2 className='page-title'>{t('contact.title')}</h2>
      <ContactBox />
      <ContactForm />
    </Layout>
  );
}

export default Contact;
