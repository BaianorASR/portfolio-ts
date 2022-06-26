import { AtomText } from '../atoms/AtomText';

export const IntroDescription = () => {
  return (
    <div className="sm:text-5xl text-4xl font-semibold">
      <AtomText tailwindClass="text-nord-15 text-xs">👋 Bem vindo!</AtomText> <br />
      Olá, eu sou o <span className="text-nord-7 font-extrabold">Baianor!</span> <br />
      <AtomText tailwindClass="text-lg">
        Desenvolvedor <span className="text-nord-9">Full-Stack</span>
      </AtomText>
    </div>
  );
};
