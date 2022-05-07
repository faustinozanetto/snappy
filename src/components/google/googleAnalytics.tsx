import React from 'react';
import Script from 'next/script';
import { __GTAGID__ } from '@lib/constants';
import { initializeGTag } from '@lib/google/googleTag';

interface GoogleAnalyticsProps {}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({}) => {
  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${__GTAGID__}`}
      strategy="lazyOnload"
      onLoad={initializeGTag}
    />
  );
};

export default GoogleAnalytics;
