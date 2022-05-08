import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { capitalizeString } from '@lib/helper/helperFunctions';
import { selectCodeCustomization, setCodeCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { getThemeList } from '@lib/themes/themeUtils';
import SelectInput from '../input/selectInput';

interface EditorToolbarCodeThemeListProps {}

const EditorToolbarCodeThemeList: React.FC<EditorToolbarCodeThemeListProps> = ({}) => {
  const dispatch = useDispatch();
  const codeCustomization = useSelector(selectCodeCustomization);

  /**
   * It calls the setCodeTheme action
   * @param event event from the select input
   */
  const handleCodeThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const theme = event.target.value;
    dispatch(setCodeCustomization({ codeTheme: theme }));
  };

  return (
    <Box width="full">
      <Text as="h2" fontSize="lg" fontWeight={600} mb={2}>
        Themes
      </Text>
      <SelectInput onChange={handleCodeThemeChange} defaultValue={codeCustomization.codeTheme}>
        {getThemeList()
          .sort()
          .map((key) => {
            return (
              <option key={key[0]} value={key[0]}>
                {capitalizeString(key[1])}
              </option>
            );
          })}
      </SelectInput>
    </Box>
  );
};
export default EditorToolbarCodeThemeList;
