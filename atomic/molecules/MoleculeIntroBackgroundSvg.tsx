/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BgForm1 from '../../svg/Bg-bubble-1';
import BgForm2 from '../../svg/Bg-bubble-2';
import BgForm3 from '../../svg/Bg-bubble-3';

export const MoleculeIntroBackgroundSvg = () => {
  return (
    <div className="relative">
      <BgForm1 tailwindClass="fill-nord-00 w-44 animate-pulse ease-linear absolute top-32 left-10" />
      <BgForm2 tailwindClass="fill-nord-000 w-44 animate-pulse absolute bottom-36" />
      <BgForm3 tailwindClass="fill-nord-00 w-44 animate-pulse ease-in-out duration-[20000ms] absolute right-24" />
    </div>
  );
};
