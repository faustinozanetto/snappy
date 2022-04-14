import React from 'react';
import prisma from '@lib/prisma';
import { Layout } from '@components/layout/LayoutContainer';
import { GetStaticProps } from 'next';
import { Editor } from '@components/editor/Editor';
import { Button } from '@chakra-ui/react';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <div className='container center'>
        <Editor />
        <Button>Open modal</Button>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default HomePage;
