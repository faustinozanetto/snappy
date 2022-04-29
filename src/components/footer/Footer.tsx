import React from 'react';
import Link from 'next/link';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="bg-gray-300 text-gray-900 mt-auto dark:bg-gray-900 dark:text-gray-200 p-4">
      <div className="flex flex-col items-center p-4">
        <SnapifyLogo size="xl" logoColor={useColorModeValue('black', 'white')} />
        <div className="flex flex-row mt-2 space-x-4">
          <Link href={'/'}>Home</Link>
          <Link href={'#'}>Terms</Link>
          <Link href={'#'}>Privacy</Link>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <Text>© 2022 Conkis Studios. All rights reserved</Text>
      </div>
    </div>
  );
};
export default Footer;
