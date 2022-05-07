import React from 'react';
import Editor from '@components/editor/editor';
import Layout from '@components/layout/layout';
import { __URL__ } from '@lib/constants';
import { NextSeo } from 'next-seo';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout
      layoutHeadProps={{
        title: 'Home | Snappy',
        url: __URL__,
        canonicalUrl: __URL__,
        description: 'Snappy is a simple, fast and powerful code snippet creator.',
      }}
    >
      <NextSeo title="Home | Snappy" />
      <Editor />
    </Layout>
  );
};

export default HomePage;
