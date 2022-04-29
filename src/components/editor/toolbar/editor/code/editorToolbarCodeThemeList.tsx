import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCodeCustomization, setCodeCustomization } from '@state/slices/editor/editorCustomization.slice';
import { CodeTheme } from 'snappy.types';
import { capitalizeString } from '@lib/helper/helperFunctions';

interface EditorToolbarCodeThemeListProps {}

const EditorToolbarCodeThemeList: React.FC<EditorToolbarCodeThemeListProps> = ({}) => {
  const dispatch = useDispatch();
  const codeCustomization = useSelector(selectCodeCustomization);

  /**
   * It calls the setCodeTheme action
   * @param event event from the select input
   */
  const handleCodeThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const theme: CodeTheme = event.target.value as CodeTheme;
    dispatch(setCodeCustomization({ codeTheme: theme }));
  };

  return (
    <Box pb={2} width="full">
      <Text as="h2" fontWeight={600} fontSize="lg" mb={2}>
        Themes
      </Text>
      <Select onChange={handleCodeThemeChange} defaultValue={codeCustomization.codeTheme}>
        {Object.keys(CodeTheme)
          .sort()
          .map((key) => {
            return (
              <option key={key} value={CodeTheme[key]}>
                {capitalizeString(CodeTheme[key])}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
export default EditorToolbarCodeThemeList;
