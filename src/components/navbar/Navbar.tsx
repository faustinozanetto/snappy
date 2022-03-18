import React from 'react';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import { NavbarContent, NavbarWrapper } from './Navbar.stlyes';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <NavbarWrapper>
      <NavbarContent>
        {/* Logo */}
        <SnapifyLogo size='large' />
      </NavbarContent>
    </NavbarWrapper>
  );
};
