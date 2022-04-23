import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

interface NavbarThemeTogglerProps {}

export const NavbarThemeToggler: React.FC<NavbarThemeTogglerProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Toggle Theme'
      backgroundColor='transparent'
      icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      onClick={toggleColorMode}
    />
  );
};
