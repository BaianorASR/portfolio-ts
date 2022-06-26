import React, { FC } from 'react';

type AtomTextProps = {
  tailwindClass?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const AtomText: FC<AtomTextProps> = ({ tailwindClass, children, ...props }) => {
  return (
    <p className={tailwindClass} {...props}>
      {children}
    </p>
  );
};
