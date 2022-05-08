import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectExportCustomization, setExportCustomization } from '@state/slices/editor/editorCustomization.slice';
import CustomizationSlider from '../input/sliderInput';

interface EditorToolbarExportImageSizeProps {}

const EditorToolbarExportImageSize: React.FC<EditorToolbarExportImageSizeProps> = ({}) => {
  const dispatch = useDispatch();
  const exportCustomization = useSelector(selectExportCustomization);
  return (
    <CustomizationSlider
      label="Quality Multiplier"
      aria-label="Quality Multiplier"
      range={[0, 5]}
      stepSize={0.25}
      allSteps
      allStepsSize={1}
      defaultValue={exportCustomization.sizeMultiplier}
      onUpdated={(value) =>
        dispatch(
          setExportCustomization({
            sizeMultiplier: value as 1 | 2 | 3 | 4,
          })
        )
      }
    />
  );
};
export default EditorToolbarExportImageSize;
