import { FC } from 'react';

import ComponentLayout from '../../styles/layouts/DefaultLayout';
import { OrganismStackGroup } from '../organisms/OrganismStackGroup';

type StacksContent = {
  id: number;
  name: string;
  icon: string;
};

type TemplateStacksProps = {
  stacksContent: StacksContent[];
};

export const TemplateStacks: FC<TemplateStacksProps> = ({ stacksContent }) => {
  return (
    <ComponentLayout display="row" tailwindClass="items-center ">
      <span className="bg-gradient-to-r from-nord-00 to-transparent absolute left-0 z-10 w-6 h-full" />
      <section className="text-nord-8 h-60 whitespace-nowrap flex flex-col justify-center gap-8 overflow-hidden">
        <OrganismStackGroup stacksContent={stacksContent} />
        <OrganismStackGroup stacksContent={stacksContent.reverse()} invertAnimation />
      </section>
      <span className="bg-gradient-to-l from-nord-00 to-transparent absolute right-0 z-10 w-6 h-full" />
    </ComponentLayout>
  );
};
