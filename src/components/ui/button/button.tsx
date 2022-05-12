import React from 'react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';
import type { ForwardedRef } from 'react';

export type ButtonProps = ChakraButtonProps & {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = React.forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { children, ...rest } = props;
  return (
    <ChakraButton
      px={8}
      ref={ref}
      fontWeight={700}
      colorScheme="brand"
      rounded="md"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
});

Button.displayName = 'Button';
export default Button;
