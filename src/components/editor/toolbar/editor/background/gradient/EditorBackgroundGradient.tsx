import React, { useState } from 'react';
import { Box, Text, HStack, VStack, Button } from '@chakra-ui/react';
import { useGradientEditor } from '@hooks/useGradientEditor';
import { RgbColorPicker } from 'react-colorful';
import {
  Color,
  GradientColor,
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { useDebouncedCallback } from '@hooks/useDebounce';
import { useDispatch, useSelector } from 'react-redux';
import { GradientColorsHolder } from './GradientColorsHolder';

interface EditorBackgroundGradientProps {
  defaultColors: GradientColor[];
  defaultType: 'linear' | 'radial';
}

export const EditorBackgroundGradient: React.FC<EditorBackgroundGradientProps> = (props) => {
  const { defaultColors, defaultType } = props;
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const [currentColorID, setCurrentColorID] = useState(-1);

  const { colors, editColor, setType, gradient } = useGradientEditor({
    colors: defaultColors,
    type: defaultType,
  });

  const handleColorChange = useDebouncedCallback((color: Color) => {
    editColor(
      {
        r: color.r,
        g: color.g,
        b: color.b,
        a: 1,
        position: colors[currentColorID].position,
      },
      currentColorID
    );
    // Redux update
    dispatch(
      setBackgroundCustomization({
        backgroundGradient: {
          data: {
            ...backgroundCustomization.backgroundGradient.data,
            colors: colors,
          },
          generated: gradient,
        },
      })
    );
  }, 10);

  return (
    <Box py={2} width="full">
      <VStack display="flex" spacing={4}>
        <HStack justifyContent="space-between" width="full">
          <Text as="h2" fontWeight={600} mb={2}>
            Gradient Editor
          </Text>
        </HStack>
        {/* Gradient Box */}
        <GradientColorsHolder
          background={gradient}
          colors={colors}
          currentMarkerIndex={currentColorID}
          onMarkerSelect={(id) => setCurrentColorID(id)}
        />

        {/* Picker */}
        {currentColorID !== -1 && (
          <Box backgroundColor={'gray.700'} padding={4} borderRadius={'md'}>
            <RgbColorPicker color={colors[currentColorID]} onChange={handleColorChange} />
          </Box>
        )}

        {/* Options */}
        <HStack>
          <Button onClick={() => setType('linear')}>Linear</Button>
          <Button onClick={() => setType('radial')}>Radial</Button>
        </HStack>
      </VStack>
    </Box>
  );
};
