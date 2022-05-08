import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { parseCustomizationPreset } from '@lib/helper/helperFunctions';
import { setCustomizationPreset } from '@state/slices/app/app.slice';
import { setCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch } from 'react-redux';
import type { EditorCustomizationState, Presets } from 'snappy.types';
import { BackgroundType } from 'snappy.types';
import { CUSTOMIZATION_TEMPLATES } from '@lib/constants';
import EditorToolbarPresetItem from './editorToolbarPresetItem';

interface EditorToolbarPresetsListProps {}

const EditorToolbarPresetsList: React.FC<EditorToolbarPresetsListProps> = ({}) => {
  const dispatch = useDispatch();

  const handlePresetChange = (preset: Presets) => {
    dispatch(setCustomizationPreset(preset));
    const newCustomizationData = parseCustomizationPreset(preset);
    dispatch(setCustomization(newCustomizationData));
  };

  const getPresetBackground = (theme: EditorCustomizationState): string => {
    let background = '';
    if (theme.backgroundCustomization.backgroundType === BackgroundType.COLOR) {
      background = `rgba(${theme.backgroundCustomization.backgroundColor.r}, ${theme.backgroundCustomization.backgroundColor.g}, ${theme.backgroundCustomization.backgroundColor.b}, ${theme.backgroundCustomization.backgroundColor.a})`;
    } else if (theme.backgroundCustomization.backgroundType === BackgroundType.IMAGE) {
      background = theme.backgroundCustomization.backgroundImage;
    } else if (theme.backgroundCustomization.backgroundType === BackgroundType.GRADIENT) {
      background = theme.backgroundCustomization.backgroundGradient.generated;
    }
    return background;
  };

  return (
    <Box width="full">
      <Text as="h2" fontSize="lg" fontWeight={600} mb={2}>
        Presets
      </Text>
      {/* Scrollable list of presets */}
      <HStack overflowX="scroll" flexWrap="nowrap">
        {CUSTOMIZATION_TEMPLATES.map((preset) => {
          return (
            <EditorToolbarPresetItem
              key={preset.name}
              thumbnail={preset.thumbnail}
              background={getPresetBackground(preset.theme)}
              onSelected={() => handlePresetChange(preset.name)}
            />
          );
        })}
      </HStack>
    </Box>
  );
};
export default EditorToolbarPresetsList;
