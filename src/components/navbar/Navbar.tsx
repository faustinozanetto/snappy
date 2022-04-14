import React from 'react';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import { Container } from '@chakra-ui/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Container as='nav'>
      <SnapifyLogo size='xl' />
    </Container>
  );
};
