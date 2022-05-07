import { Box, Flex } from '@chakra-ui/react';

import Footer from '@components/footer/footer';
import React from 'react';

import SnapifyLogo from '@components/branding/snapifyLogo';
import LayoutContainer from './layoutContainer';
import type { LayoutHeadProps } from './layoutHead';
import LayoutHead from './layoutHead';

interface LayoutProps {
  /** Children */
  children: React.ReactNode;
  /** Layout head props */
  layoutHeadProps?: LayoutHeadProps;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, layoutHeadProps } = props;

  return (
    <Flex
      as="main"
      minHeight="100vh"
      flexDir="column"
      backgroundColor="background"
      alignItems="center"
      justifyContent="center"
    >
      {/* Head */}
      <LayoutHead {...layoutHeadProps} />

      {/* Container */}
      <LayoutContainer>
        {/* Logo */}
        <Box role="banner" mb={[6, 8, 10, 12, 14]}>
          <SnapifyLogo responsive />
        </Box>
        {children}
      </LayoutContainer>
      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default Layout;
