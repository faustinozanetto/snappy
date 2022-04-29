import * as React from 'react';

export type ExportContextType = {
  exportRef: HTMLDivElement;
  updateExportRef: (ref: HTMLDivElement) => void;
};

export const ExportContext = React.createContext<ExportContextType | null>(
  null
);

const ExportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentRef, setCurrentRef] = React.useState<HTMLDivElement>(null);

  const updateExportRef = (ref: HTMLDivElement) => {
    setCurrentRef(ref);
  };

  return (
    <ExportContext.Provider value={{ exportRef: currentRef, updateExportRef }}>
      {children}
    </ExportContext.Provider>
  );
};

export default ExportProvider;
