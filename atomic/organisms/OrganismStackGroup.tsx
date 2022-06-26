import { FC, useCallback } from 'react';

import { MoleculeStackRow } from '../molecules/MoleculeStackRow';

type StacksContent = {
  id: number;
  name: string;
  icon: string;
};

type OrganismStackGroupPros = {
  stacksContent: StacksContent[];
  invertAnimation?: boolean;
};

export const OrganismStackGroup: FC<OrganismStackGroupPros> = ({
  stacksContent,
  invertAnimation,
}) => {
  const loopStacks = useCallback(
    (array: StacksContent[]) => [...array, ...array, ...array],
    [],
  );

  return (
    <ul
      className={` min-w-fit flex gap-4 ${
        invertAnimation ? 'animate-travelOut' : 'animate-travelIn'
      }`}
    >
      {loopStacks(stacksContent).map((stack, index) => (
        <MoleculeStackRow icon={stack.icon} name={stack.name} key={index} />
      ))}
    </ul>
  );
};
