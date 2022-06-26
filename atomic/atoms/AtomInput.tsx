import { FC } from 'react';

type AtomInputTextProps = {
  tailwindClass?: string;
  placeholder?: string;
};

export const AtomInputText: FC<AtomInputTextProps> = ({ tailwindClass, placeholder }) => {
  return <input type="text" className={tailwindClass} placeholder={placeholder} />;
};
