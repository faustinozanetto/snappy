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
    <Heading
      color="logo"
      fontSize={responsive ? ['4em', '5em', '6em', '7em'] : size}
      fontWeight={900}
      lineHeight="1.2"
      fontFamily="Gotham, sans-serif"
    >
      Snappy
    </Heading>
  );
};

export default SnapifyLogo;
