import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { RgbColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import type { Color } from 'snappy.types';

import { selectWindowCustomization, setWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import useDebouncedCallback from '@hooks/useDebounce';
import CustomizationSlider from '../../input/sliderInput';

interface EditorToolbarWindowShadowProps {}

const EditorToolbarWindowShadow: React.FC<EditorToolbarWindowShadowProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  /**
   * Handles the state change of the shadow color.
   * @param color The color to set the shadow to.
   */
  const handleShadowColorChange = useDebouncedCallback((color: Color) => {
    dispatch(
      setWindowCustomization({
        shadow: {
          ...windowCustomization.shadow,
          boxShadowColor: {
            r: color.r,
            g: color.g,
            b: color.b,
            a: 0.45,
          },
        },
      })
    );
  }, 10);

  return (
    <VStack display="flex" spacing={4}>
      {/* Shadow Size */}
      <CustomizationSlider
        label="Shadow Size"
        aria-label="Shadow Size"
        range={[0, 5]}
        stepSize={0.1}
        allSteps
        allStepsSize={1}
        defaultValue={windowCustomization?.shadow?.boxShadowSize || 2}
        onUpdated={(value) =>
          dispatch(
            setWindowCustomization({
              shadow: {
                ...windowCustomization.shadow,
                boxShadow: value !== 0,
                boxShadowSize: value,
              },
            })
          )
        }
      />
      {/* Shadow Color */}
      <Text as="h2" fontSize="lg" fontWeight={600}>
        Background Color
      </Text>

      {/* Color */}
      <Box backgroundColor="background" padding={4} borderRadius="md">
        <RgbColorPicker
          color={windowCustomization?.shadow?.boxShadowColor || { r: 169, g: 18, b: 250 }}
          onChange={(color) => {
            handleShadowColorChange({ r: color.r, g: color.g, b: color.b, a: 1 });
          }}
        />
      </Box>
    </VStack>
  );
};

export default EditorToolbarWindowShadow;
