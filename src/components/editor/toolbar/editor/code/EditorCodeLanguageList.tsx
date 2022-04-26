import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import {
  CodeLanguage,
  setCodeCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch } from 'react-redux';

interface EditorCodeLanguageListProps {}

export const EditorCodeLanguageList: React.FC<
  EditorCodeLanguageListProps
> = ({}) => {
  const dispatch = useDispatch();

  /**
   * It calls the setCodeLanguage action
   * @param event event from the select input
   */
  const handleCodeLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setCodeCustomization({ codeLanguage: event.target.value }));
  };

  /**
   *
   * @param language language name in lowercase
   * @returns the name with the first
   */
  const capitalizeLanguageName = (language: string): string => {
    return language.charAt(0).toUpperCase() + language.slice(1);
  };

  return (
    <Box pb={2} width='full'>
      <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
        Language
      </Text>
      <Select
        placeholder='Choose a Language'
        onChange={handleCodeLanguageChange}
      >
        {/* Map all options from CodeLanguage */}
        {Object.keys(CodeLanguage).map((language) => (
          <option key={language} value={language}>
            {capitalizeLanguageName(language.toLowerCase())}
          </option>
        ))}
      </Select>
    </Box>
  );
};
