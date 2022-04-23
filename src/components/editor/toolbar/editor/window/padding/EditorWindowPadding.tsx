import React from 'react';
import { VStack } from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { EditorWindowPaddingSlider } from './EditorWindowPaddingSlider';
import { CustomizationSlider } from '../../input/CustomizationSlider';

interface EditorWindowPaddingProps {}

export const EditorWindowPadding: React.FC<EditorWindowPaddingProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <VStack spacing={4}>
      {/* Horizontal */}
      <CustomizationSlider
        label='Horizontal Padding'
        range={[0, 25]}
        defaultValue={windowCustomization.paddingX}
        onUpdated={(value) =>
          dispatch(setWindowCustomization({ paddingX: value }))
        }
      />
      {/* Vertical */}
      <CustomizationSlider
        label='Vertical Padding'
        range={[0, 25]}
        defaultValue={windowCustomization.paddingY}
        onUpdated={(value) =>
          dispatch(setWindowCustomization({ paddingY: value }))
        }
      />
    </VStack>
  );
};
