import React, { FC } from 'react';

type AtomButtonProps = {
  tailwindClass?: string;
  content: string;
};

export const AtomButton: FC<AtomButtonProps> = ({ tailwindClass, content }) => {
  return (
    <button type="button" className={tailwindClass}>
      {content}
    </button>
  );
};
