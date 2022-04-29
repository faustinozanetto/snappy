import React from 'react';
import { Box, Text, Select, HStack } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFontCustomization, setFontCustomization } from '@state/slices/editor/editorCustomization.slice';
import { FontFamily } from 'snappy.types';

interface EditorToolbarFontListProps {}

const EditorToolbarFontList: React.FC<EditorToolbarFontListProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontCustomization({ fontFamily: event.target.value }));
  };

  return (
    <Box py={2} width="full">
      <HStack justifyContent="space-between" width="full">
        <Text as="h2" fontWeight={600} mb={2}>
          Font List
        </Text>
      </HStack>
      <Select placeholder="Choose a Font" onChange={handleFontChange} defaultValue={fontCustomization.fontFamily}>
        {Object.keys(FontFamily).sort().map((key) => {
          return (
            <option key={key} value={FontFamily[key]}>
              {FontFamily[key]}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};
export default EditorToolbarFontList;
