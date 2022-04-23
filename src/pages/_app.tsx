import '@styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'state/SnapifyStore';

const SnapifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SessionProvider>
    </Provider>
  );
};

export default SnapifyApp;
