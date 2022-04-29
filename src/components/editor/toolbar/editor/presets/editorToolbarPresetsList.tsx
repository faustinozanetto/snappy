import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import { Presets } from 'snappy.types';
import { selectCustomizationPreset, setCustomizationPreset } from '@state/slices/app/app.slice';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomization } from '@state/slices/editor/editorCustomization.slice';
import { capitalizeString, parseCustomizationPreset } from '@lib/helper/helperFunctions';

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
      <Select onChange={handlePresetChange} defaultValue={customizationPreset}>
        {Object.keys(Presets)
          .sort()
          .map((key) => {
            return (
              <option key={key} value={Presets[key]}>
                {capitalizeString(Presets[key])}
              </option>
            );
          })}
      </Select>
    </Box>
  );
};
export default EditorToolbarPresetsList;
