import { FC } from 'react';

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
    <section className="text-nord-8 h-60 border-y border-nord-1 whitespace-nowrap flex flex-col justify-center gap-8 overflow-hidden">
      <OrganismStackGroup stacksContent={stacksContent} />
      <OrganismStackGroup stacksContent={stacksContent.reverse()} invertAnimation />
    </section>
  );
};
