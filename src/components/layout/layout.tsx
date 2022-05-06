import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';

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
  const logoSize = useBreakpointValue({
    base: 'xl',
    sm: '2xl',
    md: '3xl',
  }) as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  return (
    <Flex minHeight="100vh" flexDir="column" backgroundColor="background">
      {/* Head */}
      <LayoutHead {...layoutHeadProps} />

      {/* Container */}
      <LayoutContainer>
        {/* Logo */}
        <Box my={4}>
          <SnapifyLogo size={logoSize} />
        </Box>
        {children}
      </LayoutContainer>
      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default Layout;
