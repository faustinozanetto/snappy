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
      label='Size Multiplier'
      range={[1, 4]}
      stepSize={1}
      allSteps={true}
      allStepsSize={1}
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
