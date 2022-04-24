import React from 'react';
import Head from 'next/head';

export interface LayoutHeadProps {
  title?: string;
  description?: string;
  url?: string;
  canonicalUrl?: string;
  favIcon?: string;
}

export const LayoutHead: React.FC<LayoutHeadProps> = (props) => {
  const {
    title,
    description,
    url,
    canonicalUrl,
    favIcon = 'favicon.png',
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
    </Head>
  );
};
