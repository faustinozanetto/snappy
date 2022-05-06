import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, VStack } from '@chakra-ui/react';

import useDebouncedCallback from '@hooks/useDebounce';
import useGradientEditor from '@hooks/useGradientEditor';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { RgbColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';

import type { Color, GradientColor } from 'snappy.types';

import Button from '@components/ui/button/button';
import GradientEditorMarkersHolder from './gradientEditorMarkersHolder';

interface EditorToolbarBackgroundGradientProps {
  defaultColors: GradientColor[];
  defaultType: 'linear' | 'radial';
}

const EditorToolbarBackgroundGradient: React.FC<EditorToolbarBackgroundGradientProps> = (props) => {
  const { defaultColors, defaultType } = props;
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const [currentColorID, setCurrentColorID] = useState(0);

  const { colors, editColor, setType, type, gradient } = useGradientEditor({
    colors: defaultColors,
    type: defaultType,
  });

  /** Handles the color change of the hook. */
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
  }, 5);

  /**
   * Handle the redux state update when colors or type changes.
   */
  useEffect(() => {
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
  }, [colors, type]);

  return (
    <VStack display="flex" spacing={4}>
      {/* Heading */}
      <Text as="h2" fontSize="lg" fontWeight={600}>
        Gradient Editor
      </Text>
      {/* Gradient Box */}
      <GradientEditorMarkersHolder
        background={gradient}
        colors={colors}
        currentMarkerIndex={currentColorID}
        onMarkerSelect={(id) => setCurrentColorID(id)}
      />

      {/* Picker */}
      {currentColorID !== -1 && (
        <Box backgroundColor="background" padding={4} borderRadius="md">
          <RgbColorPicker
            aria-label="Gradient Color Picker"
            color={colors[currentColorID]}
            onChange={(color) => {
              handleColorChange({ r: color.r, g: color.g, b: color.b, a: 1 });
            }}
          />
        </Box>
      )}

      {/* Options */}
      <HStack>
        <Button aria-label="Linear Gradient" role="button" onClick={() => setType('linear')}>
          Linear
        </Button>
        <Button aria-label="Radial Gradient" role="button" onClick={() => setType('radial')}>
          Radial
        </Button>
      </HStack>
    </VStack>
  );
};
export default EditorToolbarBackgroundGradient;
