import { FC } from 'react';

import { AtomTitle } from '../atoms/AtomTitle';
import { MoleculeHeaderNavbar } from '../molecules/MoleculeHeaderNavbar';

export const OrganismHeader: FC = () => {
  return (
    <header className="backdrop-blur-md h-14 fixed top-0 z-50 flex items-center justify-center w-screen px-4 m-auto shadow select-none">
      <div className=" max-w-7xl relative flex justify-between w-screen">
        <AtomTitle tailwindClass="text-nord-13 animate-pulse flex text-xl font-bold">
          Baianim.ts
        </AtomTitle>
        <MoleculeHeaderNavbar />
      </div>
    </header>
  );
};
