import React from 'react';
import type { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

interface PersistGateSSRProps {
  children?: React.ReactNode;
  loading?: boolean;
  persistor: Persistor;
}

/**
 * SSR aware persist gate
 * @param props Same as the original PersistGate
 * @returns persisted or un-persisted component
 */
// @ts-ignore
const PersistGateSSR: React.FC<PersistGateSSRProps> = (props) => {
  const { loading, persistor, children } = props;
  if (!process.browser) {
    // Not on browser, nothing to persist here
    return children;
  } else {
    return (
      <PersistGate loading={loading} persistor={persistor}>
        {children}
      </PersistGate>
    );
  }
};
export default PersistGateSSR;
