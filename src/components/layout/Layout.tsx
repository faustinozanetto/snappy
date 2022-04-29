import React from 'react';
import SnapifyLogo from '@components/branding/snapifyLogo';
import Footer from '@components/footer/footer';
import LayoutContainer from './layoutContainer';
import LayoutHead, { LayoutHeadProps } from './layoutHead';
import { useBreakpointValue, Flex, Box, useColorModeValue } from '@chakra-ui/react';

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
    <div className="flex flex-col min-h-screen bg-gray-200 dark:bg-gray-800">
      {/* Head */}
      <Head {...layoutHeadProps} />

      {/* Container */}
      <LayoutContainer>
        {/* Logo */}
        <div className="py-10">
          <SnapifyLogo size={logoSize} logoColor={useColorModeValue('black', 'white')} />
        </div>
        {children}
      </LayoutContainer>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
