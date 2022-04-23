import { Box } from '@chakra-ui/react';
import React from 'react';

interface CodeLineProps {
  children?: React.ReactNode;
}

export const CodeLine: React.FC<CodeLineProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Box display='table-row' {...rest}>
      {children}
    </Box>
  );
};
