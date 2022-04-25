import React from 'react';
import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import { LayoutHead, LayoutHeadProps } from './LayoutHead';
import { LayoutContainer } from './LayoutContainer';
import { Footer } from '@components/footer/Footer';
import SnapifyLogo from '@components/branding/SnapifyLogo';

interface LayoutProps {
  /** Children */
  children: React.ReactNode;
  layoutHead?: React.FC<LayoutHeadProps>;
  layoutHeadProps?: LayoutHeadProps;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, layoutHead: Head = LayoutHead, layoutHeadProps } = props;
  return (
    <Flex minHeight='100vh' flexDir={'column'}>
      {/* Head */}
      <Head {...layoutHeadProps} />

      {/* Container */}
      <LayoutContainer>
        {/* Logo */}
        <Box my={4}>
          <SnapifyLogo
            size='3xl'
            logoColor={useColorModeValue('black', 'white')}
          />
        </Box>
        {children}
      </LayoutContainer>
      {/* Footer */}
      <Footer />
    </Flex>
  );
};
