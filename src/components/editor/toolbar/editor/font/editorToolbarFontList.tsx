import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { selectFontCustomization, setFontCustomization } from '@state/slices/editor/editorCustomization.slice';
import { FontFamily } from 'snappy.types';
import SelectInput from '../input/selectInput';

interface EditorToolbarFontListProps {}

const EditorToolbarFontList: React.FC<EditorToolbarFontListProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontCustomization({ fontFamily: event.target.value as FontFamily }));
  };

  return (
    <Box width="full">
      <Text as="h2" fontSize="lg" fontWeight={600} mb={2}>
        Font List
      </Text>
      <SelectInput
        placeholder="Choose a Font"
        aria-label="Font Family"
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
      </SelectInput>
    </Box>
  );
};
export default EditorToolbarFontList;
