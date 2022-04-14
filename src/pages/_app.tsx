import '@styles/globals.css';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const SnapifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default SnapifyApp;
