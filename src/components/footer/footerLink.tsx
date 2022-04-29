import Link from 'next/link';
import React from 'react';
import { Button, VisuallyHidden } from '@chakra-ui/react';

interface FooterLinkProps {
  /** Children */
  children?: React.ReactNode;
  /** Label to display */
  label: string;
  /** Link to navigate */
  href: string;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { children, label, href } = props;
  return (
    <Link href={href} passHref>
      <Button rounded="full" width={12} height={12} cursor="pointer">
        <VisuallyHidden> {label}</VisuallyHidden>
        {children}
      </Button>
    </Link>
  );
};
export default FooterLink;
