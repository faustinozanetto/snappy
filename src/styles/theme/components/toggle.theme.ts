import type { ComponentStyleConfig } from '@chakra-ui/react';

const toggleThemed: ComponentStyleConfig = {
  parts: ['track', 'thumb'],
  baseStyle: (props) => ({
    thumb: {
      background: props.colorMode === 'dark' ? 'white' : 'dark',
    },
  }),
};

export default toggleThemed;
