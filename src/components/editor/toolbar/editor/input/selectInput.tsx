import React from 'react';
import type { SelectProps } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';

type SelectInputProps = SelectProps;

const SelectInput: React.FC<SelectInputProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Select bg="backgroundSecondary" borderWidth="2px" borderColor="logo" color="textPrimary" {...rest}>
      {children}
    </Select>
  );
};
export default SelectInput;
