import React, { FC } from 'react';

import { AtomInputText } from '../atoms/AtomInput';

export const MoleculeContactForm: FC = () => {
  return (
    <form action="" className="flex flex-col gap-3 mx-10 max-w-[600px]">
      <div className="sm:flex-nowrap flex flex-wrap flex-1 gap-3">
        <AtomInputText
          tailwindClass="bg-nord-0 border-nord-3 w-full p-2 border rounded"
          placeholder="Nome"
        />

        <AtomInputText
          tailwindClass="bg-nord-0 border-nord-3 w-full p-2 border rounded"
          placeholder="Email"
        />
      </div>
      <textarea
        name="message"
        cols={30}
        rows={10}
        className="bg-nord-0 border-nord-3 p-2 border rounded"
        placeholder="Mensagem"
      ></textarea>
    </form>
  );
};
