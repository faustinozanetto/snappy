import React from 'react';
import { Text, Switch, HStack } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { selectCodeCustomization, setCodeCustomization } from '@state/slices/editor/editorCustomization.slice';

interface EditorCodeLineNumbersProps {}

export const EditorCodeLineNumbers: React.FC<EditorCodeLineNumbersProps> = ({}) => {
  const dispatch = useDispatch();
  const codeCustomization = useSelector(selectCodeCustomization);

  /**
   *
   * @param event event from the select input
   */
  const handleCodeLineNumbersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCodeCustomization({ lineNumbers: event.target.checked }));
  };

  return (
    <HStack pb={2} justifyContent="space-between" width="full">
      <Text as="h2" fontWeight={600} fontSize="lg" mb={2}>
        Line Numbers
      </Text>
      <Switch onChange={handleCodeLineNumbersChange} isChecked={codeCustomization.lineNumbers} />
    </HStack>
  );
};
