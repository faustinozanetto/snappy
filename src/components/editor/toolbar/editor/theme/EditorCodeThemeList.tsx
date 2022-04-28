import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import {
  CodeTheme,
  selectCodeCustomization,
  setCodeCustomization,
} from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';

interface EditorCodeThemeListProps {}

export const EditorCodeThemeList: React.FC<EditorCodeThemeListProps> = ({}) => {
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

  /**
   *
   * @param theme theme name in lowercase
   * @returns the name with the first
   */
  const capitalizeThemeName = (theme: string): string => {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
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
                {capitalizeThemeName(CodeTheme[key])}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
