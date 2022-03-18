import React from 'react';
import SnapifyLogo from '@components/branding/SnapifyLogo';
interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className='flex flex-wrap justify-start items-center w-full z-100 pb-4 pt-4 backdrop-blur-md bg-indigo-600'>
      <div className='container mx-auto justify-between ml-auto mr-auto pl-4 pr-4 '>
        {/* Logo */}
        <SnapifyLogo size='large' />
      </div>
    </nav>
  );
};
