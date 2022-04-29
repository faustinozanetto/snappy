import React from 'react';
import Button from '@components/ui/button';
import { useColorMode } from '@chakra-ui/react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';
import { useTheme } from 'next-themes';

interface ThemeTogglerProps {}

const ThemeToggler: React.FC<ThemeTogglerProps> = ({}) => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <Button
      aria-label="Toggle Theme"
      leftIcon={theme === 'dark' ? <FiSun /> : <FiMoon />}
      border="2px solid"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Change Theme
    </Button>
  );
};

export default ThemeToggler;
