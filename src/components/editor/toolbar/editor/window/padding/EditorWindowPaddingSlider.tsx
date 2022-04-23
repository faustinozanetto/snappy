import React, { useEffect, useState } from 'react';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  Text,
  SliderTrack,
  Box,
  HStack,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

interface EditorWindowPaddingSliderProps {
  label?: string;
  defaultValue?: number;
  onUpdated?: (value: number) => void;
}

export const EditorWindowPaddingSlider: React.FC<
  EditorWindowPaddingSliderProps
> = (props) => {
  const { defaultValue = 10, onUpdated, label } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const [sliderValue, setSliderValue] = useState(defaultValue);

  useEffect(() => {
    onUpdated(sliderValue);
  }, [sliderValue]);

  return (
    <Box pb={2} width='full'>
      <HStack justifyContent='space-between' width='full'>
        <Text as='h2' fontWeight={600} fontSize='lg' mb={2}>
          {label}
        </Text>
      </HStack>
      <Slider
        id={label}
        aria-label={label}
        defaultValue={defaultValue}
        min={0}
        max={50}
        onChangeEnd={(event) => setSliderValue(event)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
