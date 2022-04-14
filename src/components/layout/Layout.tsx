import React from 'react'
import { Box } from '@chakra-ui/react';
import { LayoutHeadProps } from './LayoutHead';

interface LayoutProps {
  /** Children */
  children: React.ReactNode;
  layoutHead?: React.FC<LayoutHeadProps>;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  return (
    <Box role="main" minHeight="100vh">
      {/* Head */}
      <Head
    );
}