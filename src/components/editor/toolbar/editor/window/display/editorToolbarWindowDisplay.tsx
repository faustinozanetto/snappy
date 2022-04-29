import React from 'react';
import { Box, VStack } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { selectWindowCustomization, setWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import EditorToolbarWindowControls from '../controls/editorToolbarWindowControls';
import CustomizationSlider from '../../input/customizationSlider';

interface EditorToolbarWindowDisplayProps {}

const EditorToolbarWindowDisplay: React.FC<EditorToolbarWindowDisplayProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <Box py={2} width="full">
      <VStack display="flex" spacing={4}>
        {/* Padding Horizontal */}
        <CustomizationSlider
          label="Horizontal Padding"
          range={[0, 50]}
          allSteps={true}
          allStepsSize={10}
          defaultValue={windowCustomization.paddingX}
          onUpdated={(value) => dispatch(setWindowCustomization({ paddingX: value }))}
        />
        {/* Padding Vertical */}
        <CustomizationSlider
          label="Vertical Padding"
          range={[0, 50]}
          allSteps={true}
          allStepsSize={10}
          defaultValue={windowCustomization.paddingY}
          onUpdated={(value) => dispatch(setWindowCustomization({ paddingY: value }))}
        />
        {/* Border Radius */}
        <CustomizationSlider
          label="Border Radius"
          range={[0, 50]}
          allSteps={true}
          allStepsSize={10}
          defaultValue={windowCustomization.borderRadius}
          onUpdated={(value) => dispatch(setWindowCustomization({ borderRadius: value }))}
        />

        <EditorToolbarWindowControls />
      </VStack>
    </Box>
  );
};

export default EditorToolbarWindowDisplay;
