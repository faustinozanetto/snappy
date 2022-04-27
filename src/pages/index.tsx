import React from 'react';
import { Editor } from '@components/editor/Editor';
import { Layout } from '@components/layout/Layout';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout
      layoutHeadProps={{
        title: 'Home | Snappy',
        description:
          'Snappy is a simple, fast and powerful code snippet creator.',
        url: 'https://snapify.vercel.app/',
      }}
    >
      <Editor />
    </Layout>
  );
};

export default HomePage;
