import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

interface ThemeTogglerProps {}

const ThemeToggler: React.FC<ThemeTogglerProps> = (props) => {
  const {} = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Theme"
      role="button"
      icon={colorMode === 'dark' ? <FiSun /> : <FiMoon />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggler;
