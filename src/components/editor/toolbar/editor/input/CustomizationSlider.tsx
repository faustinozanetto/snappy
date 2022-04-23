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
  SliderMark,
} from '@chakra-ui/react';

interface CustomizationSliderProps {
  label?: string;
  defaultValue?: number;
  range?: [number, number];
  valueType?: 'px' | 'em' | 'rem' | 'none';
  onUpdated?: (value: number) => void;
}

export const CustomizationSlider: React.FC<CustomizationSliderProps> = (
  props
) => {
  const {
    defaultValue = 10,
    range = [0, 10],
    label = 'Slider',
    valueType = 'none',
    onUpdated,
  } = props;
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
        min={range[0]}
        max={range[1]}
        size='lg'
        onChangeEnd={(event) => setSliderValue(event)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Start Mark */}
        <SliderMark
          value={range[0]}
          mt='1'
          ml='-2.5'
          fontSize='md'
          fontWeight={600}
        >
          {range[0]} {valueType !== 'none' && valueType}
        </SliderMark>
        {/* Mid mark */}
        <SliderMark
          value={Math.round((range[0] + range[1]) / 2)}
          mt='1'
          ml='-2.5'
          fontSize='md'
          fontWeight={600}
        >
          {Math.round((range[0] + range[1]) / 2)}
          {valueType !== 'none' && valueType}
        </SliderMark>
        {/* End Mark */}
        <SliderMark
          value={range[1]}
          mt='1'
          ml='-2.5'
          fontSize='md'
          fontWeight={600}
        >
          {range[1]} {valueType !== 'none' && valueType}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={
            `${sliderValue}` + `  ${valueType !== 'none' ? valueType : ''}`
          }
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
