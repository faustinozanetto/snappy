import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectWindowCustomization, setWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import ToggleInput from '../../input/toggleInput';

interface EditorToolbarWindowControlsToggleProps {}

const EditorToolbarWindowControlsToggle: React.FC<EditorToolbarWindowControlsToggleProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  return (
    <ToggleInput
      label="Window Controls"
      aria-label="Window Controls"
      defaultChecked={windowCustomization.controls}
      colorScheme="brand"
      onChange={(e) => {
        dispatch(setWindowCustomization({ controls: e.target.checked }));
      }}
    />
  );
};

export default EditorToolbarWindowControlsToggle;
