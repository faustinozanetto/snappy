import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';

import React, { useState } from 'react';
import useDebouncedCallback from '@hooks/useDebounce';
import useGradientEditor from '@hooks/useGradientEditor';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { RgbColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';

import type { Color, GradientColor } from 'snappy.types';

import GradientEditorMarkersHolder from './gradientEditorMarkersHolder';

interface EditorToolbarBackgroundGradientProps {
  defaultColors: GradientColor[];
  defaultType: 'linear' | 'radial';
}

const EditorToolbarBackgroundGradient: React.FC<EditorToolbarBackgroundGradientProps> = (props) => {
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
    if (backgroundCustomization.backgroundGradient) {
      dispatch(
        setBackgroundCustomization({
          backgroundGradient: {
            data: {
              ...backgroundCustomization.backgroundGradient.data,
              colors,
            },
            generated: gradient,
          },
        })
      );
    }
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
        <GradientEditorMarkersHolder
          background={gradient}
          colors={colors}
          currentMarkerIndex={currentColorID}
          onMarkerSelect={(id) => setCurrentColorID(id)}
        />

        {/* Picker */}
        {currentColorID !== -1 && (
          <Box backgroundColor="gray.700" padding={4} borderRadius="md">
            <RgbColorPicker
              color={colors[currentColorID]}
              onChange={(color) => {
                handleColorChange({ r: color.r, g: color.g, b: color.b, a: 1 });
              }}
            />
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
export default EditorToolbarBackgroundGradient;
