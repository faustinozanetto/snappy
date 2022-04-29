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
  /** Label to display */
  label?: string;
  /** Initial slider value */
  defaultValue?: number;
  /** Increment */
  stepSize?: number;
  /** Should show all markers */
  allSteps?: boolean;
  /** Size between markers */
  allStepsSize?: number;
  /** Range, min to max */
  range?: [number, number];
  /** Type of value */
  valueType?: 'px' | 'em' | 'rem' | 'none';
  /**
   * Callback when value is updated
   */
  onUpdated?: (value: number) => void;
}

const CustomizationSlider: React.FC<CustomizationSliderProps> = (props) => {
  const {
    defaultValue = 10,
    range = [0, 10],
    stepSize = 0.05,
    label = 'Slider',
    valueType = 'none',
    allSteps = false,
    allStepsSize = 1,
    onUpdated,
  } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const [sliderValue, setSliderValue] = useState(defaultValue);

  useEffect(() => {
    onUpdated(sliderValue);
  }, [sliderValue]);

  return (
    <Box py={2} width="full">
      <HStack justifyContent="space-between" width="full">
        <Text as="h2" fontWeight={600} mb={2}>
          {label}
        </Text>
      </HStack>
      <Slider
        id={label}
        aria-label={label}
        defaultValue={defaultValue}
        min={range[0]}
        max={range[1]}
        step={stepSize}
        onChange={(event) => setSliderValue(event)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Start Mark */}
        <SliderMark value={range[0]} mt="1" ml="-2.5" fontSize="xs" fontWeight={500}>
          {range[0]} {valueType !== 'none' && valueType}
        </SliderMark>

        {/* Generate marks between range[0] and range[1] increasing by allStepsSize */}
        {allSteps &&
          Array.from({ length: Math.floor((range[1] - range[0]) / allStepsSize) }, (_, i) => {
            const value = range[0] + i * allStepsSize;
            return (
              <SliderMark key={value} value={value} mt="1" ml="-2.5" fontSize="xs" fontWeight={500}>
                {value.toFixed(1)} {valueType !== 'none' && valueType}
              </SliderMark>
            );
          })}

        {/* End Mark */}
        <SliderMark value={range[1]} mt="1" ml="-2.5" fontSize="xs" fontWeight={500}>
          {range[1]} {valueType !== 'none' && valueType}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="teal.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}` + `  ${valueType !== 'none' ? valueType : ''}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
export default CustomizationSlider;
