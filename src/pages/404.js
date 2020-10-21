import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import PageNotFound from '../components/PageNotFound';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <PageNotFound />
  </Layout>
);

export default NotFoundPage;
