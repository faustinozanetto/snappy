import { VStack } from '@chakra-ui/react';
import React from 'react';

export interface LayoutContainerProps {
  /** Children */
  children?: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
  const { children } = props;
  return <VStack my={[4, 8, 10, 12]}>{children}</VStack>;
};
export default LayoutContainer;