import { FC } from 'react';

import { AtomTitle } from '../atoms/AtomTitle';
import { MoleculeHeaderNavbar } from '../molecules/MoleculeHeaderNavbar';

export const OrganismHeader: FC = () => {
  return (
    <header className="backdrop-blur-md border-b-nord-1 h-14 fixed top-0 z-50 flex items-center justify-between w-screen px-4 py-1 border-b select-none">
      <AtomTitle tailwindClass="text-nord-13 animate-pulse flex text-xl font-bold">
        Baianim.ts
      </AtomTitle>
      <MoleculeHeaderNavbar />
    </header>
  );
};
