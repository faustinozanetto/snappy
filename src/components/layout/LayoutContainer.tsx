import React from 'react';

export interface LayoutContainerProps {
  /** Children */
  children?: React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
  const { children } = props;
  return <div className="flex flex-col items-center p-10">{children}</div>;
};
export default LayoutContainer;
