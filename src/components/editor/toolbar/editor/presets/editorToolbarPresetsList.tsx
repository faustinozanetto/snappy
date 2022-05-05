import React from 'react';
import { Box, Select, Text } from '@chakra-ui/react';
import { capitalizeString, parseCustomizationPreset } from '@lib/helper/helperFunctions';
import { selectCustomizationPreset, setCustomizationPreset } from '@state/slices/app/app.slice';
import { setCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Presets } from 'snappy.types';

interface EditorToolbarPresetsListProps {}

const EditorToolbarPresetsList: React.FC<EditorToolbarPresetsListProps> = ({}) => {
  const dispatch = useDispatch();
  const customizationPreset = useSelector(selectCustomizationPreset);

  const handlePresetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const preset = event.target.value as Presets;
    dispatch(setCustomizationPreset(preset));
    const newCustomizationData = parseCustomizationPreset(preset);
    dispatch(setCustomization(newCustomizationData));
  };
  return (
    <Box pb={2} width="full">
      <Text as="h2" fontWeight={600} fontSize="lg" mb={2}>
        Presets
      </Text>
      <Select onChange={handlePresetChange} variant="filled" borderRadius="none" defaultValue={customizationPreset}>
        {Object.values(Presets)
          .sort()
          .map((key) => {
            return (
              <option key={key} value={key}>
                {capitalizeString(key)}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
export default EditorToolbarPresetsList;
