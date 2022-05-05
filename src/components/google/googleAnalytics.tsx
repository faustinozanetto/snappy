import Script from 'next/script';
import React from 'react';

interface GoogleAnalyticsProps {}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({}) => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
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
