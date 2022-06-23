import Image from 'next/image';

export const Intro = () => {
  return (
    <section className="md:flex-row bg-nord-0 flex flex-col items-center justify-center h-screen p-4 transition-all">
      <p className="sm:text-5xl text-4xl font-semibold">
        <span className="text-nord-15 text-xs">👋 Bem vindo!</span> <br />
        Olá, eu sou o <span className="text-nord-7 font-extrabold">Goku!</span> <br />
        <span className="text-lg">
          Desenvolvedor <span className="text-nord-9">Full-Stack</span>
        </span>
      </p>
      <div className="transition-all">
        <Image
          src="/images/jojo.png"
          alt="Image do Baianor"
          width={400}
          height={400}
          layout="intrinsic"
          className="transition-all"
        />
      </div>
    </section>
  );
};
