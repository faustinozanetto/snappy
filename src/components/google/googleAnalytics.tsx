import React from 'react';
import Script from 'next/script';

interface GoogleAnalyticsProps {}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({}) => {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-8M3QB6LWKR" />
      <Script
        id="gtag-init"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8M3QB6LWKR', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
