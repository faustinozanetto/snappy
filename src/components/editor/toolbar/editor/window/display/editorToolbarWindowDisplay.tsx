import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectBackgroundCustomization,
  selectWindowCustomization,
  setBackgroundCustomization,
  setWindowCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import CustomizationSlider from '../../input/customizationSlider';
import EditorToolbarWindowControlsToggle from '../controls/editorToolbarWindowControlsToggle';

interface EditorToolbarWindowDisplayProps {}

const EditorToolbarWindowDisplay: React.FC<EditorToolbarWindowDisplayProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <VStack display="flex" spacing={4}>
      <EditorToolbarWindowControlsToggle />
      {/* Padding Horizontal */}
      <CustomizationSlider
        label="Horizontal Padding"
        range={[0, 50]}
        allSteps
        allStepsSize={10}
        defaultValue={windowCustomization.paddingX}
        onUpdated={(value) => dispatch(setWindowCustomization({ paddingX: value }))}
      />
      {/* Padding Vertical */}
      <CustomizationSlider
        label="Vertical Padding"
        range={[0, 50]}
        allSteps
        allStepsSize={10}
        defaultValue={windowCustomization.paddingY}
        onUpdated={(value) => dispatch(setWindowCustomization({ paddingY: value }))}
      />
      {/* Border Radius */}
      <CustomizationSlider
        label="Border Radius"
        range={[0, 50]}
        allSteps
        allStepsSize={10}
        defaultValue={windowCustomization.borderRadius}
        onUpdated={(value) => dispatch(setWindowCustomization({ borderRadius: value }))}
      />
      {/* Background blur */}
      <CustomizationSlider
        label="Blur Effect"
        range={[0, 20]}
        allSteps
        allStepsSize={5}
        defaultValue={backgroundCustomization.backgroudBlur}
        onUpdated={(value) =>
          dispatch(
            setBackgroundCustomization({
              backgroudBlur: value,
            })
          )
        }
      />
    </VStack>
  );
};

export default EditorToolbarWindowDisplay;
