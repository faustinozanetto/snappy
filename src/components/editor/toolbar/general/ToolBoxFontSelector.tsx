import { Select } from '@chakra-ui/react';
import React from 'react';

interface ToolBoxFontSelectorProps {}

export const ToolBoxFontSelector: React.FC<ToolBoxFontSelectorProps> = ({}) => {
  return (
    <Select placeholder='Select option'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  );
};
