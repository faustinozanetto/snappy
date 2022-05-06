import React from 'react';
import { Box, Select, Text } from '@chakra-ui/react';
import { capitalizeString } from '@lib/helper/helperFunctions';
import { selectCodeCustomization, setCodeCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';

import { CodeTheme } from 'snappy.types';

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
    <Box width="full">
      <Text as="h2" fontSize="lg" fontWeight={600} mb={2}>
        Themes
      </Text>
      <Select onChange={handleCodeThemeChange} defaultValue={codeCustomization.codeTheme}>
        {Object.values(CodeTheme)
          .sort()
          .map((key) => {
            return (
              <option key={key} value={key}>
                {capitalizeString(key)}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
export default EditorToolbarCodeThemeList;
