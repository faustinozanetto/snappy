import React, { useState } from 'react';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { RgbColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import type { Color } from 'snappy.types';

interface EditorToolbarBackgroundColorProps {}

const EditorToolbarBackgroundColor: React.FC<EditorToolbarBackgroundColorProps> = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const [showPicker, setShowPicker] = useState(false);

  /**
   * Handles the background color state update.
   * @param color color from the color picker
   */
  const handleColorChange = (color: Color) => {
    // Redux update
    dispatch(
      setBackgroundCustomization({
        backgroundColor: {
          r: color.r,
          g: color.g,
          b: color.b,
          a: 1,
        },
      })
    );
  };

  return (
    <Box py={2} width="full">
      <VStack display="flex" spacing={4}>
        <HStack justifyContent="space-between" width="full">
          <Text as="h2" fontWeight={600} mb={2}>
            Background Color
          </Text>
          <Button variant="outline" colorScheme="blue" onClick={() => setShowPicker((prev) => !prev)}>
            Pick
          </Button>
        </HStack>
        {/* Color */}
        {showPicker && (
          <Box backgroundColor="gray.700" padding={4} borderRadius="md">
            <RgbColorPicker
              color={backgroundCustomization.backgroundColor}
              onChange={(color) => {
                handleColorChange({ r: color.r, g: color.g, b: color.b, a: 1 });
              }}
            />
          </Box>
        )}
      </VStack>
    </Box>
  );
};
export default EditorToolbarBackgroundColor;
