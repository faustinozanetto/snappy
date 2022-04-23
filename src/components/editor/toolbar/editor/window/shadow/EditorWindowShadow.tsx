import React from 'react';
import { MenuDivider, MenuItem, VStack } from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../../input/CustomizationSlider';

interface EditorWindowShadowProps {}

export const EditorWindowShadow: React.FC<EditorWindowShadowProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);

  return (
    <VStack spacing={4} px={4}>
      {/* Shadow Size */}
      <CustomizationSlider
        label='Shadow Size'
        range={[0, 5]}
        stepSize={0.1}
        defaultValue={windowCustomization.boxShadowSize}
        onUpdated={(value) =>
          dispatch(
            setWindowCustomization({
              boxShadow: value !== 0,
              boxShadowSize: value,
            })
          )
        }
      />
    </VStack>
  );
};
