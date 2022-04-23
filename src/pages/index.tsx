import React from 'react';
import prisma from '@lib/prisma';
import { GetStaticProps } from 'next';
import { Editor } from '@components/editor/Editor';
import { Button } from '@chakra-ui/react';
import { Layout } from '@components/layout/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import { setHello } from 'state/SnapifyStore';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useDispatch();
  return (
    <Layout>
      <Editor />
      <button onClick={() => dispatch(setHello('welcomeee'))}>hello</button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default HomePage;
