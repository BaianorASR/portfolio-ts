import dynamic from 'next/dynamic';
import { Circle } from 'phosphor-react';
import { FC } from 'react';

import { AtomTitle } from '../atoms/AtomTitle';
import { MoleculeHeaderNavbar } from '../molecules/MoleculeHeaderNavbar';

const NavBar = dynamic<React.ComponentProps<typeof MoleculeHeaderNavbar>>(
  () =>
    import('../molecules/MoleculeHeaderNavbar').then(
      ({ MoleculeHeaderNavbar }) => MoleculeHeaderNavbar,
    ),
  {
    ssr: false,
    loading: () => <Circle className="animate-spin" />,
  },
);

export const OrganismHeader: FC = () => {
  return (
    <header className="backdrop-blur-md h-14 fixed top-0 z-50 flex items-center justify-center w-screen px-4 m-auto shadow select-none">
      <div className=" max-w-7xl relative flex justify-between w-screen">
        <AtomTitle tailwindClass="text-nord-13 animate-pulse flex text-xl font-bold">
          Baianim.ts
        </AtomTitle>
        <NavBar />
      </div>
    </header>
  );
};
