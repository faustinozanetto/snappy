import React from 'react';
import { Navbar } from '@components/navbar/Navbar';

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-900'>
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <main className='flex flex-col flex-1 overflow-hidden'>{children}</main>
    </div>
  );
};
