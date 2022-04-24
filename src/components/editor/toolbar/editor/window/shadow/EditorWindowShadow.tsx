import React, { useEffect, useState } from 'react';
import { Box, HStack, Text, VStack, Button } from '@chakra-ui/react';
import {
  selectWindowCustomization,
  setWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { CustomizationSlider } from '../../input/CustomizationSlider';
import { ChromePicker, RGBColor } from 'react-color';

interface EditorWindowShadowProps {}

export const EditorWindowShadow: React.FC<EditorWindowShadowProps> = ({}) => {
  const dispatch = useDispatch();
  const windowCustomization = useSelector(selectWindowCustomization);
  const [showPicker, setShowPicker] = useState(false);
  const [shadowColor, setShadowColor] = useState<RGBColor>({
    r: windowCustomization.shadow.boxShadowColor.r,
    g: windowCustomization.shadow.boxShadowColor.g,
    b: windowCustomization.shadow.boxShadowColor.b,
    a: windowCustomization.shadow.boxShadowColor.a,
  });

  // Update state when color changes
  useEffect(() => {
    dispatch(
      setWindowCustomization({
        shadow: {
          ...windowCustomization.shadow,
          boxShadowColor: {
            r: shadowColor.r,
            g: shadowColor.g,
            b: shadowColor.b,
            a: shadowColor.a,
          },
        },
      })
    );
  }, [shadowColor]);

  return (
    <VStack spacing={4} px={4}>
      {/* Shadow Size */}
      <CustomizationSlider
        label='Shadow Size'
        range={[0, 5]}
        stepSize={0.1}
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
      <Box pb={2} width='full'>
        <HStack justifyContent='space-between' width='full'>
          <Text as='h2' fontWeight={600} mb={2}>
            Shadow Color
          </Text>
          <Button
            variant='outline'
            colorScheme='blue'
            onClick={() => setShowPicker((prev) => !prev)}
          >
            Pick
          </Button>
        </HStack>
        {/* Color */}
        {showPicker && (
          <Box position='absolute' zIndex={4}>
            <ChromePicker
              color={shadowColor}
              onChange={(color) => setShadowColor(color.rgb)}
            />
          </Box>
        )}
      </Box>
    </VStack>
  );
};
