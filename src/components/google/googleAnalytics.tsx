import React from 'react';
import Script from 'next/script';
import { __GTAGID__ } from '@lib/constants';

interface GoogleAnalyticsProps {}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({}) => {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${__GTAGID__}`} />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${__GTAGID__}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
