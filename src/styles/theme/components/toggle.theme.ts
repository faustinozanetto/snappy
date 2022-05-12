import type { ComponentStyleConfig } from '@chakra-ui/react';

const toggleThemed: ComponentStyleConfig = {
  parts: ['track', 'thumb'],
  baseStyle: () => ({
    thumb: {},
  }),
};

export default toggleThemed;
