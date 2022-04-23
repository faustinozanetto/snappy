import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppProps } from 'next/app';

const SnapifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default SnapifyApp;
