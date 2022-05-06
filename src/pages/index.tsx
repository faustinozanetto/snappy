import React from 'react';
import Editor from '@components/editor/editor';
import Layout from '@components/layout/layout';
import LayoutHead from '@components/layout/layoutHead';
import type { GetStaticProps } from 'next';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout
      layoutHead={LayoutHead}
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

export const getStaticProps: GetStaticProps = async (context) => {
  const {} = context;
  return {
    props: {},
  };
};

export default HomePage;
