import React from 'react';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';
import { GradientColor } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { GradientMarker } from './GradientMarker';

interface GradientColorsHolderProps {
  colors: GradientColor[];
  onMarkerSelect: (index: number) => void;
  currentMarkerIndex: number;
  background: string;
}

export const GradientColorsHolder: React.FC<GradientColorsHolderProps> = ({
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
      width='full'
      rounded={'md'}
      border={`5px solid ${useColorModeValue('black', 'white')}`}
    >
      {/* Controls */}
      <HStack width={'full'} justifyContent={'space-between'}>
        {colors.map((color, index) => {
          return (
            <GradientMarker
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
