import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const config: ThemeConfig = {
  cssVarPrefix: 'snappy',
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: 'JetBrains Mono, monospace',
  },
});
export default theme;
