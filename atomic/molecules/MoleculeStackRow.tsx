import { FC } from 'react';

import { AtomImage } from '../atoms/AtomImage';
import { AtomText } from '../atoms/AtomText';

type MoleculeStackRowProps = {
  name: string;
  icon: string;
};

export const MoleculeStackRow: FC<MoleculeStackRowProps> = ({ icon, name }) => {
  return (
    <li className="border-nord-1 flex items-center justify-center gap-2 px-6 py-2 font-medium border rounded-full">
      <AtomText>{name}</AtomText>
      <AtomImage source={icon} alt={name} tailwindClass="w-6 h-6" />
    </li>
  );
};
