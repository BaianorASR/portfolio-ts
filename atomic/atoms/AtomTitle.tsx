import React, { FC, ReactNode } from 'react';

type AtomTitleProps = {
  tailwindClass?: string;
  children: ReactNode;
};

export const AtomTitle: FC<AtomTitleProps> = ({ tailwindClass, children }) => {
  return <div className={tailwindClass}>{children}</div>;
};
