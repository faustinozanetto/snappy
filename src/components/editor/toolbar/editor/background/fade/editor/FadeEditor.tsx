import { VStack } from '@chakra-ui/react';
import { setBackgroundCustomization } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ColorPicker from '..';

interface FadeEditorProps {}

export const FadeEditor: React.FC<FadeEditorProps> = (props) => {
  const {} = props;
  const dispatch = useDispatch();
  const [color, setColor] = useState(
    'linear-gradient(90deg, rgb(255,255,255) 0%, rgb(55,22,55) 100%)'
  );
  const onChange = (value: string) => {
    setColor(value);
    dispatch(
      setBackgroundCustomization({
        backgroundGradient: color,
      })
    );
  };

  return (
    <VStack width='100%' height='100%'>
      {/* Fade Container */}
      <ColorPicker
        value={color}
        format='rgb'
        gradient={true}
        onChange={onChange}
      />
    </VStack>
  );
};
