import React from 'react';
import CustomizationSlider from '../input/customizationSlider';
import { selectFontCustomization, setFontCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';

interface EditorToolbarFontSizeProps {}

const EditorToolbarFontSize: React.FC<EditorToolbarFontSizeProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  return (
    <CustomizationSlider
      label="Font Size"
      range={[1, 35]}
      stepSize={1}
      allSteps={true}
      allStepsSize={8}
      valueType="px"
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
export default EditorToolbarFontSize;
