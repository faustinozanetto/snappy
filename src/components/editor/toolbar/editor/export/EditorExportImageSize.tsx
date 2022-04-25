import React from 'react';
import {
  selectExportCustomization,
  setExportCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../input/CustomizationSlider';

interface EditorExportImageSizeProps {}

export const EditorExportImageSize: React.FC<
  EditorExportImageSizeProps
> = ({}) => {
  const dispatch = useDispatch();
  const exportCustomization = useSelector(selectExportCustomization);
  return (
    <CustomizationSlider
      label='Quality Multiplier'
      range={[0.1, 1]}
      stepSize={0.001}
      allSteps={true}
      allStepsSize={0.12}
      defaultValue={exportCustomization.sizeMultiplier}
      onUpdated={(value) =>
        dispatch(
          setExportCustomization({
            sizeMultiplier: value,
          })
        )
      }
    />
  );
};
