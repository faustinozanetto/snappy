import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import selectThemed from './theme/components/select.them';
import sliderThemed from './theme/components/slider.theme';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: 'JetBrains Mono, monospace',
  },
  components: {
    Slider: sliderThemed,
    Select: selectThemed,
  },
  colors: {
    brand: {
      50: '#c7d2fe',
      100: '#c7d2fe',
      200: '#a5b4fc',
      300: '#818cf8',
      400: '#818cf8',
      500: '#6366f1',
      600: '#4f46e5',
      700: '#4338ca',
      800: '#3730a3',
      900: '#312e81',
    },
  },
  semanticTokens: {
    colors: {
      logo: {
        default: '#4338ca',
        _dark: '#4f46e5',
      },

      textPrimary: {
        default: '#18181b',
        _dark: '#fafafa',
      },
      background: {
        default: '#f4f4f5',
        _dark: '#18181b',
      },
      backgroundSecondary: {
        default: '#9ca3af',
        _dark: '#27272a',
      },
      footer: {
        default: '#e2e8f0',
        _dark: '#27272a',
      },
      buttonPrimary: {
        default: '#EDF2F7',
        _dark: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
});
export default theme;
