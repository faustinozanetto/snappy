import React from 'react';
import { HStack, Switch, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWindowCustomization, setWindowCustomization } from '@state/slices/editor/editorCustomization.slice';

interface EditorToolbarWindowControlsToggleProps {}

const EditorToolbarWindowControlsToggle: React.FC<EditorToolbarWindowControlsToggleProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  return (
    <HStack width="full" justifyContent="space-between" spacing={2} mb={2}>
      <Text as="h2" fontSize="lg" fontWeight={600}>
        Window Controls
      </Text>
      <Switch
        defaultChecked={windowCustomization.controls}
        colorScheme="brand"
        onChange={(e) => {
          dispatch(setWindowCustomization({ controls: e.target.checked }));
        }}
      />
    </HStack>
  );
};

export default EditorToolbarWindowControlsToggle;
