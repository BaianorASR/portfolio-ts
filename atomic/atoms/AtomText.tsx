import { FC, HTMLAttributes } from 'react';

type AtomTextProps = {
  tailwindClass?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export const AtomText: FC<AtomTextProps> = ({ tailwindClass, children, ...props }) => {
  return (
    <p className={tailwindClass} {...props}>
      {children}
    </p>
  );
};
