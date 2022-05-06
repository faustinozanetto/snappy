import React from 'react';
import Layout from '@components/layout/layout';
import LayoutHead from '@components/layout/layoutHead';
import ErrorMessage from '@components/error/errorMessage';

interface ErrorPageProps {}

const ErrorPage: React.FC<ErrorPageProps> = () => {
  return (
    <Layout
      layoutHead={LayoutHead}
      layoutHeadProps={{
        title: 'Error | Snappy',
        canonicalUrl: 'https://snappyapp.vercel.app/',
        description: 'Snappy is a simple, fast and powerful code snippet creator.',
        url: 'https://snappyapp.vercel.app/',
      }}
    >
      <ErrorMessage />
    </Layout>
  );
};

export default ErrorPage;
