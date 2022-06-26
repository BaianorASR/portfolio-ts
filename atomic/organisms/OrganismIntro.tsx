import Image from 'next/image';

import { AtomButton } from '../atoms/AtomButton';
import { AtomText } from '../atoms/AtomText';

export const OrganismIntroduction = () => {
  return (
    <section className="md:flex-row bg-nord-0 max-h-[1080px] flex flex-col items-center justify-center h-screen p-4 transition-all">
      <div>
        <span className="text-nord-15 text-sm">👋 Bem vindo!</span> <br />
        <AtomText tailwindClass="sm:text-5xl text-4xl font-semibold">
          Olá, eu sou o <span className="text-nord-7 font-extrabold">Baianor!</span>
          <br />
        </AtomText>
        <AtomText tailwindClass="text-lg">
          Desenvolvedor <span className="text-nord-9">Full-Stack</span>
        </AtomText>
        <div className="flex gap-4 mt-4">
          <AtomButton
            tailwindClass="bg-nord-14 text-nord-000 hover:scale-105 hover:brightness-90 w-32 h-10 font-medium transition-all rounded-sm"
            content="Download CV"
          />
          <AtomButton
            tailwindClass="bg-nord-12 text-nord-000 hover:scale-105 hover:brightness-90 w-32 h-10 font-medium transition-all rounded-sm"
            content="Projetos"
          />
        </div>
      </div>
      <Image
        src="/images/jojo.png"
        alt="Image do Baianor"
        width={400}
        height={400}
        layout="intrinsic"
        className="transition-all"
      />
    </section>
  );
};
