import React from 'react';
import Layout from '@components/layout/layout';
import { __URL__ } from '@lib/constants';
import SnappyEditor from '@components/editor/snappyEditor';

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
      <SnappyEditor />
    </Layout>
  );
};

export default HomePage;
