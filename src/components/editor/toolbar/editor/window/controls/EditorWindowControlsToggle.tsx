import React from 'react';
import { Box, Text, HStack, Switch } from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';

interface EditorWindowControlsToggleProps {}

export const EditorWindowControlsToggle: React.FC<
  EditorWindowControlsToggleProps
> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  return (
    <Box py={2} width='full'>
      <HStack justifyContent='space-between' width='full'>
        <Text as='h2' fontWeight={600}>
          Window Controls
        </Text>
        <Switch
          defaultChecked={windowCustomization.controls}
          onChange={(e) => {
            dispatch(setWindowCustomization({ controls: e.target.checked }));
          }}
        />
      </HStack>
    </Box>
  );
};
