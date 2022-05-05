import Head from 'next/head';
import React from 'react';

export interface LayoutHeadProps {
  /** Seo title */
  title?: string;
  /** Seo description */
  description?: string;
  /** Seo url */
  url?: string;
  /** Seo canonical url */
  canonicalUrl?: string;
  /** Seo image used in twitter cards, etc. */
  image?: string;
}

const LayoutHead: React.FC<LayoutHeadProps> = (props) => {
  const { title, description, url, canonicalUrl, image = '/images/favicon/android-chrome-192x192.png' } = props;
  return (
    <Head>
      <title>{title}</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index" />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="192" />
      <meta property="og:image:height" content="192" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Snappy" />
      {/* Twitter */}
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@snappy" />
    </Head>
  );
};

export default LayoutHead;