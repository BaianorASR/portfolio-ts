import { FC } from 'react';

type AtomInputTextProps = {
  tailwindClass?: string;
  placeholder?: string;
  type?: string;
};

export const AtomInputText: FC<AtomInputTextProps> = ({
  tailwindClass,
  placeholder,
  type = 'text',
}) => {
  return <input type={type} className={tailwindClass} placeholder={placeholder} />;
};
