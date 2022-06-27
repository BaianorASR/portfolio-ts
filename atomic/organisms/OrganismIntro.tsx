import Image from 'next/image';

import ComponentLayout from '../../styles/layouts/DefaultLayout';
import { MoleculeIntroBackgroundSvg } from '../molecules/MoleculeIntroBackgroundSvg';
import { MoleculeIntroDescription } from '../molecules/MoleculeIntroDescription';

export const OrganismIntroduction = () => {
  return (
    <ComponentLayout background="bg-nord-0 overflow-hidden">
      <section className="md:flex-row bg-nord-0 max-h-[1080px] flex flex-col items-center justify-center h-screen p-4 transition-all relative">
        <MoleculeIntroBackgroundSvg />
        <MoleculeIntroDescription />
        <Image
          src="/images/jojo.png"
          alt="Image do Baianor"
          width={400}
          height={400}
          layout="intrinsic"
          className="transition-all"
        />
      </section>
    </ComponentLayout>
  );
};
