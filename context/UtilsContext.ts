import { createContext } from 'react';

interface IUtilsContext {
  isBrowser: boolean;
  refs: {
    contact: HTMLDivElement;
  };
}

const InitialCtxValue: IUtilsContext = {
  isBrowser: false,
  refs: {
    contact: document.createElement('div'),
  },
};

export const UtilsContext = createContext<IUtilsContext>(InitialCtxValue);
