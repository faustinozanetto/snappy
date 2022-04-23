import { Button, VisuallyHidden } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface FooterButtonProps {
  children?: React.ReactNode;
  label: string;
  href: string;
}

export const FooterButton: React.FC<FooterButtonProps> = (props) => {
  const { children, label, href } = props;
  return (
    <Link href={href} passHref>
      <Button rounded='full' width={12} height={12} cursor='pointer'>
        <VisuallyHidden> {label}</VisuallyHidden>
        {children}
      </Button>
    </Link>
  );
};
