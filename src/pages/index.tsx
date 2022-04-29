import React from 'react';
import Editor from '@components/editor/editor';
import Layout from '@components/layout/layout';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout
      layoutHeadProps={{
        title: 'Home | Snappy',
        description: 'Snappy is a simple, fast and powerful code snippet creator.',
        url: 'https://snappyapp.vercel.app/',
        canonicalUrl: 'https://snappyapp.vercel.app/',
      }}
    >
      <Editor />

      <h1 className="text-3xl font-bold underline">Snappy</h1>
    </Layout>
  );
};

export default HomePage;
