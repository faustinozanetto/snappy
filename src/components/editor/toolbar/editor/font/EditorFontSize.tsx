import React from 'react';
import {
  selectFontCustomization,
  setFontCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../input/CustomizationSlider';

interface EditorFontSizeProps {}

export const EditorFontSize: React.FC<EditorFontSizeProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  return (
    <CustomizationSlider
      label='Font Size'
      range={[1, 35]}
      stepSize={1}
      allSteps={true}
      allStepsSize={8}
      valueType='px'
      defaultValue={fontCustomization.fontSize}
      onUpdated={(value) =>
        dispatch(
          setFontCustomization({
            fontSize: value,
          })
        )
      }
    />
  );
};
