import type { ComponentStyleConfig } from '@chakra-ui/react';

const selectThemed: ComponentStyleConfig = {
  parts: ['field'],
  baseStyle: (props) => ({
    field: {
      background: props.colorMode === 'dark' ? 'brand.600' : 'brand.400',
      fontWeight: 600,
      '> option, > optgroup': {},
    },
  }),
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};

export default selectThemed;
