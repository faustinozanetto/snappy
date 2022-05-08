import React, { useEffect, useState } from 'react';
import type { SliderProps } from '@chakra-ui/react';
import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, Tooltip } from '@chakra-ui/react';

type SliderInputProps = SliderProps & {
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
  onUpdated: (value: number) => void;
};

const CustomizationSlider: React.FC<SliderInputProps> = (props) => {
  const {
    defaultValue = 10,
    range = [0, 10],
    stepSize = 0.05,
    label = 'Slider',
    valueType = 'none',
    allSteps = false,
    allStepsSize = 1,
    onUpdated,
    ...rest
  } = props;
  const [showTooltip, setShowTooltip] = useState(false);
  const [sliderValue, setSliderValue] = useState(defaultValue);

  useEffect(() => {
    onUpdated(sliderValue);
  }, [sliderValue]);

  return (
    <Box width="full" padding={2}>
      <Text as="h2" fontSize="lg" fontWeight={600}>
        {label}
      </Text>
      <Slider
        id={label}
        aria-label={label}
        defaultValue={defaultValue}
        min={range[0]}
        max={range[1]}
        step={stepSize}
        colorScheme="brand"
        onChangeEnd={(event) => setSliderValue(event)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        {...rest}
      >
        {/* Start Mark */}
        <SliderMark value={range[0]} mt="1" ml="-2.5" fontSize="xs" fontWeight={500}>
          {range[0]}
        </SliderMark>

        {/* Generate marks between range[0] and range[1] increasing by allStepsSize */}
        {allSteps &&
          Array.from({ length: Math.floor((range[1] - range[0]) / allStepsSize) }, (_, i) => {
            const value = range[0] + i * allStepsSize;
            return (
              <SliderMark key={value} value={value} mt="1" ml="-2.5" fontSize="xs" fontWeight={500}>
                {value.toFixed(1)}
              </SliderMark>
            );
          })}

        {/* End Mark */}
        <SliderMark value={range[1]} mt="1" ml="-2.5" fontSize="xs" fontWeight={500}>
          {range[1]}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          colorScheme="brand"
          isOpen={showTooltip}
          label={sliderValue + (valueType !== 'none' ? valueType : '')}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};
export default CustomizationSlider;
