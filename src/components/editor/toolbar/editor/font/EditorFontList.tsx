import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import { setFontFamily } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch } from 'react-redux';

interface EditorFontListProps {}

export const EditorFontList: React.FC<EditorFontListProps> = ({}) => {
  const dispatch = useDispatch();

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFontFamily(event.target.value));
  };

  return (
    <Box pb={2} width='full'>
      <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
        Font List
      </Text>
      <Select placeholder='Choose a Font' onChange={handleFontChange}>
        <option value='Roboto'>Roboto</option>
        <option value='Arial'>Arial</option>
        <option value='Times New Roman'>Times New Roman</option>
        <option value='Verdana'>Verdana</option>
        {/* Add all web safe fonts as separate options */}
        <option value='Arial Black'>Arial Black</option>
        <option value='Arial Narrow'>Arial Narrow</option>
        <option value='Arial Rounded MT Bold'>Arial Rounded MT Bold</option>
        <option value='Avant Garde'>Avant Garde</option>
        <option value='Calibri'>Calibri</option>
        <option value='Cambria'>Cambria</option>
        <option value='Candara'>Candara</option>
        <option value='Century Gothic'>Century Gothic</option>
        <option value='Franklin Gothic Medium'>Franklin Gothic Medium</option>
        <option value='Futura'>Futura</option>
        <option value='Geneva'>Geneva</option>
        <option value='Gill Sans'>Gill Sans</option>
        <option value='Helvetica'>Helvetica</option>
        <option value='Impact'>Impact</option>
        <option value='Lucida Grande'>Lucida Grande</option>
      </Select>
    </Box>
  );
};
