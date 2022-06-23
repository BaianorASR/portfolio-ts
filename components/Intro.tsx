import Image from 'next/image';

export const Intro = () => {
  return (
    <section className="h-[calc(100vh-1.5rem)] flex items-center justify-center flex-col md:flex-row md: m-4">
      <p className=' text-4xl'>
        <span className="text-nord-15 text-xs">Bem vindo!</span> <br/>
        Olá, eu sou o <span  className='text-nord-7 font-semibold'>Goku!</span> <br />
        <span className="text-lg">Desenvolvedor <span className='text-nord-9'>Full-Stack</span></span>
      </p>
      <div>
      <Image src="/images/jojo.png" alt="Image do Baianor" width={400} height={400} layout="intrinsic"/>
      </div>
    </section>
  )
}