import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import {
  CodeTheme,
  setCodeTheme,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch } from 'react-redux';

interface EditorCodeThemeListProps {}

export const EditorCodeThemeList: React.FC<EditorCodeThemeListProps> = ({}) => {
  const dispatch = useDispatch();

  /**
   * It calls the setCodeTheme action
   * @param event event from the select input
   */
  const handleCodeThemeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const theme: CodeTheme = CodeTheme[event.target.value.toUpperCase()];
    dispatch(setCodeTheme(theme));
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
    <Box pb={2} width='full'>
      <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
        Themes
      </Text>
      <Select placeholder='Choose a Theme' onChange={handleCodeThemeChange}>
        {Object.values(CodeTheme).map((key) => {
          return (
            <option key={key} value={key}>
              {capitalizeThemeName(key)}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};
