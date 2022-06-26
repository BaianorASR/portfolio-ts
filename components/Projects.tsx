import Image from 'next/image';
import { GithubLogo, Link } from 'phosphor-react';
import React from 'react';

export const Projects = () => {
  return (
    <section className="bg-nord-000 flex flex-col">
      <div className="border-nord-1 bg-nord-0 relative p-2 m-4 border rounded">
        <span className="text-nord-9 absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center m-auto text-4xl font-bold">
          <span>⋆</span>
          BAIANOR
          <span>⋆</span>
        </span>
        <h2 className="text-nord-12 text-2xl font-bold">Titulo do Projeto</h2>
        <div className="flex items-center justify-end gap-2 my-2 mr-2">
          Links
          <GithubLogo size={30} className="bg-nord-8 text-nord-00 p-1 rounded-full" />
          <Link size={30} className="bg-nord-8 text-nord-00 p-1 rounded-full" />
        </div>
        <Image
          src="/images/rei.png"
          alt="Imagem do projeto"
          width={400}
          height={250}
          layout="intrinsic"
        />
        <p className="text-nord-4 backdrop-blur-sm bg-nord-2 p-1 italic rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corporis
          obcaecati, ea placeat provident quod totam consectetur dignissimos rem,
          inventore quia aut qui maiores, aperiam sapiente hic atque vero voluptatum!
        </p>
        <p className="text-nord-13 mt-2 text-xs font-medium">
          REACT - TYPESCRIPT - STYLED
        </p>
      </div>
    </section>
  );
};
