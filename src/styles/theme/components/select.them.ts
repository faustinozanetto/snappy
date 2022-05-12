import type { ComponentStyleConfig } from '@chakra-ui/react';

const selectThemed: ComponentStyleConfig = {
  parts: ['field'],
  baseStyle: (props) => ({
    field: {
      fontWeight: 600,
      '> option, > optgroup': {},
    },
  }),
  defaultProps: {
    size: 'md',
    variant: 'filled',
  },
};

export default selectThemed;
