import React from 'react';
import prisma from '@lib/prisma';
import { GetStaticProps } from 'next';
import { Editor } from '@components/editor/Editor';
import { Button } from '@chakra-ui/react';
import { Layout } from '@components/layout/Layout';
import { useSession, signIn, signOut } from 'next-auth/react';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Layout>
      <Editor />
      <button
        onClick={() =>
          signIn('discord', {
            callbackUrl: '/',
            redirect: true,
          })
        }
      >
        Sign in
      </button>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default HomePage;
