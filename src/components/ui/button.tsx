import React, { ForwardedRef } from 'react';
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export type ButtonProps = ChakraButtonProps & {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = React.forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { children, ...rest } = props;
  return (
    <ChakraButton borderRadius={0} ref={ref} {...rest}>
      {children}
    </ChakraButton>
  );
});

Button.displayName = 'Button';
export default Button;
