import { useColorMode } from '@chakra-ui/react';

import React from 'react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import Button from '@components/ui/button/button';

interface ThemeTogglerProps {}

const ThemeToggler: React.FC<ThemeTogglerProps> = (props) => {
  const {} = props;
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
