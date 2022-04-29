import React from 'react';
import Button from '@components/ui/button';
import { useColorMode } from '@chakra-ui/react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

interface ThemeTogglerProps {}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      aria-label="Toggle Theme"
      leftIcon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      border="2px solid"
      onClick={toggleColorMode}
    >
      Change Theme
    </Button>
  );
};

export default ThemeToggler;
