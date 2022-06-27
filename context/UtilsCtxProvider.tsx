import React from 'react';

import { UtilsContext } from './UtilsContext';

type UtilsCtxProviderProps = {
  children: React.ReactNode;
};

export default function UtilsCtxProvider({ children }: UtilsCtxProviderProps) {
  return <UtilsContext.Provider value={{}}>{children}</UtilsContext.Provider>;
}

export function useUtilsCtx() {
  const ctx = React.useContext(UtilsContext);
  if (!ctx) {
    throw new Error('useUtilsCtx must be used within a utils context');
  }
  return ctx;
}
