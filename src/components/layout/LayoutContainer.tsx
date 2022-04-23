import React from 'react';
import { Box } from '@chakra-ui/react';

export interface LayoutContainerProps {
  /** Children */
  children?: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
  const { children } = props;
  return <Box minHeight='100vh'>{children}</Box>;
};
