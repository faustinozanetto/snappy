import type { ComponentStyleConfig } from '@chakra-ui/react';

const sliderThemed: ComponentStyleConfig = {
  parts: ['track', 'filledTrack'],
  baseStyle: (props) => ({
    filledTrack: {
      background: props.colorMode === 'dark' ? 'brand.500' : 'brand.200',
    },
  }),
};

export default sliderThemed;
