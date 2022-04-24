import React from 'react';
import { VStack } from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../../input/CustomizationSlider';

interface EditorWindowDisplayProps {}

export const EditorWindowDisplay: React.FC<EditorWindowDisplayProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <VStack spacing={4} px={4}>
      {/* Padding Horizontal */}
      <CustomizationSlider
        label='Horizontal Padding'
        range={[0, 50]}
        allSteps={true}
        allStepsSize={10}
        defaultValue={windowCustomization.paddingX}
        onUpdated={(value) =>
          dispatch(setWindowCustomization({ paddingX: value }))
        }
      />
      {/* Padding Vertical */}
      <CustomizationSlider
        label='Vertical Padding'
        range={[0, 50]}
        allSteps={true}
        allStepsSize={10}
        defaultValue={windowCustomization.paddingY}
        onUpdated={(value) =>
          dispatch(setWindowCustomization({ paddingY: value }))
        }
      />
      {/* Border Radius */}
      <CustomizationSlider
        label='Border Radius'
        range={[0, 50]}
        allSteps={true}
        allStepsSize={10}
        valueType='px'
        defaultValue={windowCustomization.borderRadius}
        onUpdated={(value) =>
          dispatch(setWindowCustomization({ borderRadius: value }))
        }
      />
    </VStack>
  );
};
