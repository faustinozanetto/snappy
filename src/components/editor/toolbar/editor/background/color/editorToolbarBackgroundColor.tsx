import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { RgbColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import type { Color } from 'snappy.types';
import useDebouncedCallback from '@hooks/useDebounce';

interface EditorToolbarBackgroundColorProps {}

const EditorToolbarBackgroundColor: React.FC<EditorToolbarBackgroundColorProps> = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  /**
   * Handles the background color state update.
   * @param color color from the color picker
   */
  const handleColorChange = useDebouncedCallback((color: Color) => {
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
  }, 10);

  return (
    <VStack display="flex" spacing={4}>
      {/* Heading */}
      <Text as="h2" fontSize="lg" fontWeight={600}>
        Background Color
      </Text>

      {/* Color */}
      <Box backgroundColor="background" padding={4} borderRadius="md">
        <RgbColorPicker
          aria-label="Background Color Picker"
          color={backgroundCustomization.backgroundColor}
          onChange={(color) => {
            handleColorChange({ r: color.r, g: color.g, b: color.b, a: 1 });
          }}
        />
      </Box>
    </VStack>
  );
};
export default EditorToolbarBackgroundColor;
