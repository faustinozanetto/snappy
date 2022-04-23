import React from 'react';
import { Editor } from '@components/editor/Editor';
import { Layout } from '@components/layout/Layout';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <Editor />
    </Layout>
  );
};

export default HomePage;
