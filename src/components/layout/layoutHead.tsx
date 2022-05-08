import { __URL__ } from '@lib/constants';
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
  const { title, description, url, canonicalUrl, image = `${__URL__}images/brand/snappy-logo.png` } = props;
  return (
    <Head>
      <title>{title}</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index" />
      <meta name="description" content={description} />

      <meta content="snippet, code, editor, snappy" name="keywords" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="canonical" href={canonicalUrl} />
      <meta content="#4f46e5" name="theme-color" />

      {/* Icons */}
      <link rel="apple-touch-icon" sizes="57x57" href="images/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="images/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="images/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="images/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="images/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="images/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="images/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="images/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="images/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="images/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />

      {/* Open grahp */}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="452" />
      <meta property="og:image:height" content="175" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Snappy" />
      <meta property="og:description" content={description} />
      {/* Twitter */}
      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@snappy" />
    </Head>
  );
};

export default LayoutHead;
