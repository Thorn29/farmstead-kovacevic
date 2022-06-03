import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const Head = ({ title, children }) => {

  const { t } = useTranslation();

  return(
    <Helmet>
      <title>{title} | {t('mainname')} Kovačević</title>
      <meta name='description' content={children} />
    </Helmet>
  );
}

export default Head;
