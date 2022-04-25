import React from 'react';
import { VStack } from '@chakra-ui/react';

export interface LayoutContainerProps {
  /** Children */
  children?: React.ReactNode;
}

export const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
  const { children } = props;
  return <VStack my={12}>{children}</VStack>;
};
