import React, { useState } from 'react';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { RgbColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import type { Color } from 'snappy.types';

import { selectWindowCustomization, setWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import CustomizationSlider from '../../input/customizationSlider';

interface EditorToolbarWindowShadowProps {}

const EditorToolbarWindowShadow: React.FC<EditorToolbarWindowShadowProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  const [showPicker, setShowPicker] = useState(false);

  /**
   * Handles the state change of the shadow color.
   * @param color The color to set the shadow to.
   */
  const handleShadowColorChange = (color: Color) => {
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
  };

  return (
    <Box py={2} width="full">
      <VStack display="flex" spacing={4}>
        {/* Shadow Size */}
        <CustomizationSlider
          label="Shadow Size"
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
        <HStack justifyContent="space-between" width="full" mb={2}>
          <Text as="h2" fontWeight={600} mb={2}>
            Shadow Color
          </Text>
          <Button variant="outline" colorScheme="blue" onClick={() => setShowPicker((prev) => !prev)}>
            Pick
          </Button>
        </HStack>
        {/* Color */}
        {showPicker && (
          <Box backgroundColor="gray.700" padding={4} borderRadius="md">
            <RgbColorPicker
              color={windowCustomization?.shadow?.boxShadowColor || { r: 169, g: 18, b: 250 }}
              onChange={(color) => {
                handleShadowColorChange({ r: color.r, g: color.g, b: color.b, a: 1 });
              }}
            />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default EditorToolbarWindowShadow;
