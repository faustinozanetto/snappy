import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  Text,
  SliderTrack,
  Box,
  HStack,
} from '@chakra-ui/react';
import {
  selectFontCustomization,
  setFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface EditorFontSizeProps {}

export const EditorFontSize: React.FC<EditorFontSizeProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  const handleFontSizeChange = (newSize: number) => {
    dispatch(setFontCustomization({ fontSize: newSize }));
  };
  return (
    <Box pb={2} width='full'>
      <HStack justifyContent='space-between' width='full'>
        <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
          Font Size
          <Text as='span' fontSize='sm'>
            {` `} in px
          </Text>
        </Text>
        <Text as='span' fontWeight={600} fontSize='md'>
          {fontCustomization.fontSize}px
        </Text>
      </HStack>
      <Slider
        aria-label='Font Size'
        defaultValue={fontCustomization.fontSize}
        onChangeEnd={handleFontSizeChange}
        min={1}
        max={40}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
