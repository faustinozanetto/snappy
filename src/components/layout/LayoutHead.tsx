import React from 'react';
import Head from 'next/head';

export interface LayoutHeadProps {
  title?: string;
  description?: string;
  url?: string;
  canonicalUrl?: string;
  image?: string;
  favIcon?: string;
}

export const LayoutHead: React.FC<LayoutHeadProps> = (props) => {
  const {
    title,
    description,
    url,
    canonicalUrl,
    image = '/images/favicon.png',
    favIcon = '/images/favicon.png',
  } = props;
  return (
    <Head>
      <title>{title}</title>
      {/* Manifest */}
      <link rel='manifest' href='/manifest.json' />
      {/* Base */}
      <meta charSet='UTF-8' />
      <meta name='robots' content='index' />
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' type='image/png' sizes='256x256' href={favIcon} />
      <link rel='canonical' href={canonicalUrl} />

      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={title} />
      <meta property='og:locale' content='en' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Snappy' />
      {/* Twitter */}
      <meta name='twitter:site' content={url} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:creator' content='@snappy' />
    </Head>
  );
};
