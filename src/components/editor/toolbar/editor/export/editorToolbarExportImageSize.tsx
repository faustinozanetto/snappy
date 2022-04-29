import React from 'react';
import CustomizationSlider from '../input/customizationSlider';
import { selectExportCustomization, setExportCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';

interface EditorToolbarExportImageSizeProps {}

const EditorToolbarExportImageSize: React.FC<EditorToolbarExportImageSizeProps> = ({}) => {
  const dispatch = useDispatch();
  const exportCustomization = useSelector(selectExportCustomization);
  return (
    <CustomizationSlider
      label="Quality Multiplier"
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
export default EditorToolbarExportImageSize;
