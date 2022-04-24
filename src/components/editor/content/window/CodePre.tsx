import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

type CodePreProps = TextProps & {
  children?: React.ReactNode;
};

export const CodePre: React.FC<CodePreProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <Text
      as='pre'
      style={{
        textAlign: 'left',
        margin: '1em 0',
        padding: '0.5em',
        overflow: 'scroll',
      }}
      {...rest}
    >
      {children}
    </Text>
  );
};
