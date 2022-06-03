import Generator from 'react-router-sitemap-generator';
import Router from './router';

const generator = new Generator(
  'https://react-router-sitemap-generator.com',
  Router,
  {
    lastmod: new Date().toISOString().slice(0, 10),
    changefreq: 'monthly',
    priority: 0.8,
  }
);
generator.save('public/sitemap.xml');
