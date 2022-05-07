import React from 'react';
import Layout from '@components/layout/layout';
import ErrorMessage from '@components/error/errorMessage';
import { __URL__ } from '@lib/constants';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <Layout
      layoutHeadProps={{
        title: 'Not Found | Snappy',
        url: __URL__,
        canonicalUrl: __URL__,
        description: 'Snappy is a simple, fast and powerful code snippet creator.',
      }}
    >
      <ErrorMessage />
    </Layout>
  );
};

export default ErrorPage;
