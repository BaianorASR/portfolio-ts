import { AtomButton } from '../atoms/AtomButton';
import { AtomText } from '../atoms/AtomText';

export const MoleculeIntroDescription = () => {
  return (
    <div>
      <span className="text-nord-15 animate-waving-hand text-sm">👋 Bem vindo!</span>
      <br />
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
  );
};
