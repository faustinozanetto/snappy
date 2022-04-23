import React from 'react';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import { Box, Container, Flex } from '@chakra-ui/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Box as='nav' boxShadow='2xl' py={4}>
      <Container maxW='md'>
        <Flex justifyContent='center' alignItems='center'>
          <SnapifyLogo size='xl' />
        </Flex>
      </Container>
    </Box>
  );
};
