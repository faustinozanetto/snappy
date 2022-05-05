import React from 'react';
import Editor from '@components/editor/editor';
import Layout from '@components/layout/layout';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout
      layoutHeadProps={{
        title: 'Home | Snappy',
        canonicalUrl: 'https://snappyapp.vercel.app/',
        description: 'Snappy is a simple, fast and powerful code snippet creator.',
        url: 'https://snappyapp.vercel.app/',
      }}
    >
      <Editor />
    </Layout>
  );
};

export default HomePage;
