import React from 'react';
import SnapifyLogo from '@components/branding/snapifyLogo';
import Link from 'next/link';
import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      marginTop={'auto'}
    >
      <Container as={Stack} maxW="6xl" py={4} spacing={4} justify="center" align="center">
        <SnapifyLogo size="xl" logoColor={useColorModeValue('black', 'white')} />
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>Terms</Link>
          <Link href={'#'}>Privacy</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container as={Stack} maxW={'6xl'} py={4} spacing={4} textAlign="center">
          <Text>© 2022 Conkis Studios. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
  );
};
export default Footer;
