import React from 'react';
import { Text, Box, HStack, Select } from '@chakra-ui/react';
import {
  selectExportCustomization,
  setExportCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { FileExtension } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
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
        {/* Map FileExtension values */}
        {Object.values(FileExtension).map((extension: string, i) => (
          <option key={i} value={extension}>
            {extension}
          </option>
        ))}
      </Select>
    </Box>
  );
};
