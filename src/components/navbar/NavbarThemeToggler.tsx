import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import { Button } from '@components/ui/Button';

interface NavbarThemeTogglerProps {}

export const NavbarThemeToggler: React.FC<NavbarThemeTogglerProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      aria-label='Toggle Theme'
      leftIcon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      border='2px solid'
      onClick={toggleColorMode}
    >
      Change Theme
    </Button>
  );
};
