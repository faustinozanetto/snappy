import React from 'react';
import {
  selectFontCustomization,
  setFontCustomization,
} from '@state/slices/editor/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../input/CustomizationSlider';

interface EditorLineHeigthProps {}

export const EditorLineHeigth: React.FC<EditorLineHeigthProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  return (
    <CustomizationSlider
      label='Line Height'
      range={[1, 3]}
      stepSize={0.05}
      allSteps={true}
      allStepsSize={0.5}
      valueType='em'
      defaultValue={fontCustomization.lineHeight}
      onUpdated={(value) =>
        dispatch(
          setFontCustomization({
            lineHeight: value,
          })
        )
      }
    />
  );
};
