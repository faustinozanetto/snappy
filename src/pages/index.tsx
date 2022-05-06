import React from 'react';
import Editor from '@components/editor/editor';
import Layout from '@components/layout/layout';
import type { GetStaticProps } from 'next';
import { __URL__ } from '@lib/constants';

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
      <Editor />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {} = context;
  return {
    props: {},
  };
};

export default HomePage;
