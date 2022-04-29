import React, { useEffect, useState } from 'react';
import CustomizationSlider from '../../input/customizationSlider';
import { Box, HStack, Text, VStack, Button } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { selectWindowCustomization, setWindowCustomization } from '@state/slices/editor/editorCustomization.slice';
import { RgbColorPicker } from 'react-colorful';
import { Color } from 'snappy.types';

interface EditorToolbarWindowShadowProps {}

const EditorToolbarWindowShadow: React.FC<EditorToolbarWindowShadowProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  const [showPicker, setShowPicker] = useState(false);
  const [shadowColor, setShadowColor] = useState<Color>({
    r: windowCustomization.shadow.boxShadowColor.r,
    g: windowCustomization.shadow.boxShadowColor.g,
    b: windowCustomization.shadow.boxShadowColor.b,
    a: windowCustomization.shadow.boxShadowColor.a,
  });

  // Update state when color changes
  const handleShadowColorChange = (color: Color) => {
    setShadowColor({
      r: color.r,
      g: color.g,
      b: color.b,
      a: 0.45,
    });
    dispatch(
      setWindowCustomization({
        shadow: {
          ...windowCustomization.shadow,
          boxShadowColor: {
            r: color.r,
            g: color.g,
            b: color.b,
            a: 0.45,
          },
        },
      })
    );
  };

  return (
    <Box py={2} width="full">
      <VStack display="flex" spacing={4}>
        {/* Shadow Size */}
        <CustomizationSlider
          label="Shadow Size"
          range={[0, 5]}
          stepSize={0.1}
          allSteps={true}
          allStepsSize={1}
          defaultValue={windowCustomization.shadow.boxShadowSize}
          onUpdated={(value) =>
            dispatch(
              setWindowCustomization({
                shadow: {
                  ...windowCustomization.shadow,
                  boxShadow: value !== 0,
                  boxShadowSize: value,
                },
              })
            )
          }
        />
        {/* Shadow Color */}

        <HStack justifyContent="space-between" width="full" mb={2}>
          <Text as="h2" fontWeight={600} mb={2}>
            Shadow Color
          </Text>
          <Button variant="outline" colorScheme="blue" onClick={() => setShowPicker((prev) => !prev)}>
            Pick
          </Button>
        </HStack>
        {/* Color */}
        {showPicker && (
          <Box backgroundColor={'gray.700'} padding={4} borderRadius={'md'}>
            <RgbColorPicker color={windowCustomization.shadow.boxShadowColor} onChange={handleShadowColorChange} />
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default EditorToolbarWindowShadow;
