import React, { FC } from 'react';

import { MoleculeSocialMedias } from '../atomic/molecules/MoleculeSocialMedias';

export const Footer: FC = () => {
  return (
    <footer className="bg-nord-00 bottom-0 flex flex-col items-center justify-center w-full p-1 mt-10 text-xs">
      <MoleculeSocialMedias />
      Feito com ❤ pelo Baianim com Next - Tailwindcss - Strapi
    </footer>
  );
};
