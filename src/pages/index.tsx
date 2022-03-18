import { Layout } from '@components/layout/Layout';
import prisma from '@lib/prisma';
import { GetStaticProps } from 'next';
import React from 'react';
type HomePageProps = {};
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <h1>Snappify</h1>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const snippets = await prisma.snippet.findMany({});
  return { props: { snippets } };
};

export default HomePage;
