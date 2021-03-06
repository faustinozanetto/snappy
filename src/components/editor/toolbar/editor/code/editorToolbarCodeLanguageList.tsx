import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCodeCustomization, setCodeCustomization } from '@state/slices/editor/editorCustomization.slice';
import { CodeLanguage } from 'snappy.types';
import SelectInput from '../input/selectInput';

interface EditorToolbarCodeLanguageListProps {}

const EditorToolbarCodeLanguageList: React.FC<EditorToolbarCodeLanguageListProps> = ({}) => {
  const dispatch = useDispatch();
  const codeCustomization = useSelector(selectCodeCustomization);

  /**
   * It calls the setCodeLanguage action
   * @param event event from the select input
   */
  const handleCodeLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCodeCustomization({ codeLanguage: event.target.value as CodeLanguage }));
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
    <Box width="full">
      <Text as="h2" fontSize="lg" fontWeight={600} mb={2}>
        Language
      </Text>
      <SelectInput
        placeholder="Choose a Language"
        onChange={handleCodeLanguageChange}
        defaultValue={codeCustomization.codeLanguage}
      >
        {/* Map all options from CodeLanguage */}
        {Object.values(CodeLanguage).map((language) => (
          <option key={language} value={language}>
            {capitalizeLanguageName(language)}
          </option>
        ))}
      </SelectInput>
    </Box>
  );
};
export default EditorToolbarCodeLanguageList;
