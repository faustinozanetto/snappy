import React, { useState } from 'react';
import { Box, Button, Text, HStack, VStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { RGBColor } from 'react-color';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { RgbColorPicker } from 'react-colorful';
import { Color } from 'snappy.types';

interface EditorToolbarBackgroundColorProps {}

const EditorToolbarBackgroundColor: React.FC<EditorToolbarBackgroundColorProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const [showPicker, setShowPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<RGBColor>({
    r: backgroundCustomization.backgroundColor.r,
    g: backgroundCustomization.backgroundColor.g,
    b: backgroundCustomization.backgroundColor.b,
    a: backgroundCustomization.backgroundColor.a,
  });

  const handleColorChange = (color: Color) => {
    setBackgroundColor({
      r: color.r,
      g: color.g,
      b: color.b,
      a: 1,
    });
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
          <Box backgroundColor={'gray.700'} padding={4} borderRadius={'md'}>
            <RgbColorPicker color={backgroundCustomization.backgroundColor} onChange={handleColorChange} />
          </Box>
        )}
      </VStack>
    </Box>
  );
};
export default EditorToolbarBackgroundColor;