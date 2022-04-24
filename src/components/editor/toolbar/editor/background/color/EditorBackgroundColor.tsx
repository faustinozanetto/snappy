import React, { useEffect, useState } from 'react';
import { Box, Button, Text, HStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker, RGBColor } from 'react-color';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorBackgroundColorProps {}

export const EditorBackgroundColor: React.FC<
  EditorBackgroundColorProps
> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const [showPicker, setShowPicker] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState<RGBColor>({
    r: backgroundCustomization.backgroundColor.r,
    g: backgroundCustomization.backgroundColor.g,
    b: backgroundCustomization.backgroundColor.b,
    a: backgroundCustomization.backgroundColor.a,
  });

  // Update state when color changes
  useEffect(() => {
    dispatch(
      setBackgroundCustomization({
        backgroundColor: {
          r: backgroundColor.r,
          g: backgroundColor.g,
          b: backgroundColor.b,
          a: backgroundColor.a,
        },
      })
    );
  }, [backgroundColor]);

  return (
    <Box pb={2} width='full'>
      <HStack justifyContent='space-between' width='full'>
        <Text as='h2' fontWeight={600} mb={2}>
          Background Color
        </Text>
        <Button
          variant='outline'
          colorScheme='blue'
          onClick={() => setShowPicker((prev) => !prev)}
        >
          Pick
        </Button>
      </HStack>
      {/* Color */}
      {showPicker && (
        <Box position='absolute' zIndex={4}>
          <ChromePicker
            color={backgroundColor}
            onChange={(color) => setBackgroundColor(color.rgb)}
          />
        </Box>
      )}
    </Box>
  );
};
