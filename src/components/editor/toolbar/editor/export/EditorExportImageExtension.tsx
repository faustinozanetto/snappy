import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  Text,
  SliderTrack,
  Box,
  HStack,
  Select,
} from '@chakra-ui/react';
import {
  selectExportCustomization,
  selectFontCustomization,
  setExportCustomization,
  setFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface EditorExportImaageExtensionProps {}

export const EditorExportImaageExtension: React.FC<
  EditorExportImaageExtensionProps
> = ({}) => {
  const dispatch = useDispatch();
  const exportCustomization = useSelector(selectExportCustomization);

  const handleFilexExtensionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setExportCustomization({ fileExtension: event.target.value }));
  };
  return (
    <Box pb={2} width='full'>
      <HStack justifyContent='space-between' width='full'>
        <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
          File Extension
        </Text>
      </HStack>
      <Select
        placeholder='Select Extension'
        onChange={handleFilexExtensionChange}
        defaultValue={exportCustomization.fileExtension}
      >
        <option value='png'>PNG</option>
        <option value='svg'>SVG</option>
      </Select>
    </Box>
  );
};