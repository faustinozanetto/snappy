import React from 'react';
import type { TypographyProps } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

interface SnapifyLogoProps {
  size?: TypographyProps['fontSize'];
  responsive?: boolean;
}

const SnapifyLogo: React.FC<SnapifyLogoProps> = (props) => {
  const { size = 'xl', responsive } = props;

  return (
    <Heading fontWeight={800} color="logo" fontSize={responsive ? ['4em', '5em', '6em', '7em'] : size}>
      Snappy
    </Heading>
  );
};

export default SnapifyLogo;
