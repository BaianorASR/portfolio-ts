import { FC } from 'react';

import { AtomText } from '../atoms/AtomText';
import { AtomTitle } from '../atoms/AtomTitle';
import { MoleculeContactForm } from '../molecules/MoleculeContactForm';

export const OrganismContact: FC = () => {
  return (
    <section className="flex flex-col items-center">
      <AtomTitle tailwindClass="text-nord-13 my-3 text-4xl font-bold text-center">
        Contato
      </AtomTitle>
      <AtomText className="text-nord-15 text-sm text-center">
        Mande um Email para o Baianim
      </AtomText>
      <MoleculeContactForm />
    </section>
  );
};
