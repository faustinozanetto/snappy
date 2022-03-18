import { Navbar } from '@components/navbar/Navbar';
import React from 'react';
import { LayoutContent, LayoutWrapper } from './Layout.styles';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <LayoutContent>{children}</LayoutContent>
    </LayoutWrapper>
  );
};
