import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

type GradientEditorMarkerProps = BoxProps & {
  markerColor: string;
  isActive: boolean;
};

const GradientEditorMarker: React.FC<GradientEditorMarkerProps> = (props) => {
  const { children, markerColor, isActive, ...rest } = props;

  return (
    <Box
      height={12}
      width={6}
      _before={{
        content: '""',
        position: 'absolute',
        width: '24px',
        height: '48px',
        border: `4px solid ${isActive ? '#fff' : '#000'}`,
        borderRadius: '14px',
        background: markerColor,
      }}
      cursor={'pointer'}
      {...rest}
    >
      {children}
    </Box>
  );
};
export default GradientEditorMarker;
