import React from 'react';
import { Editor } from '@components/editor/Editor';
import { Layout } from '@components/layout/Layout';
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

type HomePageProps = {};

const HomePage: React.FC<HomePageProps> = () => {
  const editorState = useSelector((state) => state.editor);
  return (
    <Layout
      layoutHeadProps={{
        title: 'Home | Snappy',
        description: 'Snappy is a simple, fast and powerful code snippet creator.',
        url: 'https://snapify.vercel.app/',
      }}
    >
      <Editor />
      <Button
        onClick={() => {
          console.log(editorState);
        }}
      >
        Export template
      </Button>
    </Layout>
  );
};

export default HomePage;
