import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type CodeLineNumberProps = TextProps & {
  lineNumber?: number;
};

export const CodeLineNumber: React.FC<CodeLineNumberProps> = (props) => {
  const { lineNumber, ...rest } = props;
  return (
    <Text
      as='span'
      display='table-cell'
      textAlign='right'
      paddingRight={2}
      userSelect='none'
      opacity={0.5}
      {...rest}
    >
      {lineNumber}
    </Text>
  );
};
