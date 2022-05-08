import React from 'react';
import type { SwitchProps } from '@chakra-ui/react';
import { Flex, Text, Switch } from '@chakra-ui/react';

type ToggleInputProps = SwitchProps & {
  label: string;
};

const ToggleInput: React.FC<ToggleInputProps> = (props) => {
  const { label, children, ...rest } = props;
  return (
    <Flex flexDir="row" justifyContent="space-between" alignItems="center" width="full" padding={2}>
      <Text as="h2" fontSize="lg" fontWeight={600}>
        {label}
      </Text>
      <Switch bg="backgroundSecondary" color="textPrimary" {...rest}>
        {children}
      </Switch>
    </Flex>
  );
};
export default ToggleInput;
