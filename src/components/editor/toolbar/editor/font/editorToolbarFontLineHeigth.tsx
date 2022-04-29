import React from 'react';
import CustomizationSlider from '../input/customizationSlider';
import { selectFontCustomization, setFontCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';

interface EditorToolbarLineHeigthProps {}

const EditorToolbarLineHeigth: React.FC<EditorToolbarLineHeigthProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  return (
    <CustomizationSlider
      label="Line Height"
      range={[1, 3]}
      stepSize={0.05}
      allSteps={true}
      allStepsSize={0.5}
      valueType="em"
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
export default EditorToolbarLineHeigth;
