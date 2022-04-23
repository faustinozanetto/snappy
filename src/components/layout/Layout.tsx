import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { LayoutHead, LayoutHeadProps } from './LayoutHead';
import { LayoutContainer } from './LayoutContainer';
import { Navbar } from '@components/navbar/Navbar';
import { Footer } from '@components/footer/Footer';

interface LayoutProps {
  /** Children */
  children: React.ReactNode;
  layoutHead?: React.FC<LayoutHeadProps>;
  layoutHeadProps?: LayoutHeadProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, layoutHead: Head = LayoutHead, layoutHeadProps } = props;
  return (
    <Box role='main'>
      {/* Head */}
      <Head {...layoutHeadProps} />

      {/* Navbar */}
      <Navbar />

      {/* Container */}
      <LayoutContainer>{children}</LayoutContainer>

      {/* Footer */}
      <Footer />
    </Box>
  );
};
