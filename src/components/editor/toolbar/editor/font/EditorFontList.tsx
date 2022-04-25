import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FontFamily,
  selectFontCustomization,
  setFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorFontListProps {}

export const EditorFontList: React.FC<EditorFontListProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontCustomization({ fontFamily: event.target.value }));
  };

  return (
    <Box pb={2} width='full'>
      <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
        Font List
      </Text>
      <Select
        placeholder='Choose a Font'
        onChange={handleFontChange}
        defaultValue={fontCustomization.fontFamily}
      >
        {Object.keys(FontFamily).map((key) => {
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
