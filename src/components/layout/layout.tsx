import { Box, Flex, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';

import Footer from '@components/footer/footer';
import React from 'react';

import SnapifyLogo from '@components/branding/snapifyLogo';
import LayoutContainer from './layoutContainer';
import type { LayoutHeadProps } from './layoutHead';
import LayoutHead from './layoutHead';

interface LayoutProps {
  /** Children */
  children: React.ReactNode;
  /** Layout head component */
  layoutHead?: React.FC<LayoutHeadProps>;
  /** Layout head props */
  layoutHeadProps?: LayoutHeadProps;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, layoutHead: Head = LayoutHead, layoutHeadProps } = props;
  const logoSize = useBreakpointValue({
    base: 'xl',
    sm: '2xl',
    md: '3xl',
  }) as 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  return (
    <Flex minHeight="100vh" flexDir="column">
      {/* Head */}
      <Head {...layoutHeadProps} />

      {/* Container */}
      <LayoutContainer>
        {/* Logo */}
        <Box my={4}>
          <SnapifyLogo size={logoSize} logoColor={useColorModeValue('black', 'white')} />
        </Box>
        {children}
      </LayoutContainer>
      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default Layout;
