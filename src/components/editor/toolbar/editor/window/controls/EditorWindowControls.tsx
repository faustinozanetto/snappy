import React from 'react';
import { VStack } from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../../input/CustomizationSlider';
import { EditorWindowControlsToggle } from './EditorWindowControlsToggle';

interface EditorWindowControlsProps {}

export const EditorWindowControls: React.FC<
  EditorWindowControlsProps
> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <VStack spacing={2}>
      {/* Enable or disable window controls */}
      <EditorWindowControlsToggle />
    </VStack>
  );
};
