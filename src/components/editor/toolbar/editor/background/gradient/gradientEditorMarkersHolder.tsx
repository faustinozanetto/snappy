import React from 'react';
import GradientEditorMarker from './gradientEditorMarker';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { GradientColor } from 'snappy.types';

interface GradientEditorMarkerColorsProps {
  colors: GradientColor[];
  onMarkerSelect: (index: number) => void;
  currentMarkerIndex: number;
  background: string;
}

const GradientEditorMarkerColors: React.FC<GradientEditorMarkerColorsProps> = ({
  colors,
  background,
  onMarkerSelect,
  currentMarkerIndex,
  ...rest
}) => {
  return (
    <Flex
      height={10}
      background={background}
      width="full"
      rounded={'md'}
      border={`5px solid ${useColorModeValue('black', 'white')}`}
    >
      {/* Controls */}
      <HStack width={'full'} justifyContent={'space-between'}>
        {colors.map((color, index) => {
          return (
            <GradientEditorMarker
              key={index}
              markerColor={`rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`}
              onClick={() => onMarkerSelect(index)}
              isActive={index === currentMarkerIndex}
              {...rest}
            />
          );
        })}
      </HStack>
    </Flex>
  );
};
export default GradientEditorMarkerColors;
