import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFontCustomization, setFontCustomization } from '@state/slices/editor/editorCustomization.slice';
import CustomizationSlider from '../input/sliderInput';

interface EditorToolbarLineHeigthProps {}

const EditorToolbarLineHeigth: React.FC<EditorToolbarLineHeigthProps> = ({}) => {
  const dispatch = useDispatch();
  const fontCustomization = useSelector(selectFontCustomization);

  return (
    <CustomizationSlider
      label="Line Height"
      aria-label="Line Height"
      range={[1, 3]}
      stepSize={0.05}
      allSteps
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
