import '@styles/globals.css';
import { AppProps } from 'next/app';

const SnapifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default SnapifyApp;
