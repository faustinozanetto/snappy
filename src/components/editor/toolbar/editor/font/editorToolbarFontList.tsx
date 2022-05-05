import { Box, HStack, Select, Text } from '@chakra-ui/react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFontCustomization, setFontCustomization } from '@state/slices/editor/editorCustomization.slice';
import { FontFamily } from 'snappy.types';

interface EditorToolbarFontListProps {}

const EditorToolbarFontList: React.FC<EditorToolbarFontListProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontCustomization({ fontFamily: event.target.value as FontFamily }));
  };

  return (
    <Box py={2} width="full">
      <HStack justifyContent="space-between" width="full">
        <Text as="h2" fontWeight={600} mb={2}>
          Font List
        </Text>
      </HStack>
      <Select
        placeholder="Choose a Font"
        variant="filled"
        borderRadius="none"
        onChange={handleFontChange}
        defaultValue={fontCustomization.fontFamily}
      >
        {Object.values(FontFamily)
          .sort()
          .map((key) => {
            return (
              <option key={key} value={key}>
                {key}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
export default EditorToolbarFontList;
