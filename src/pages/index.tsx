import { Layout } from '@components/layout/Layout';
import React from 'react';
import styled from 'styled-components';

type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <h1>Snappify</h1>
    </Layout>
  );
};

export default HomePage;
