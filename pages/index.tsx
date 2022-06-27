import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Circle } from 'phosphor-react';

import { OrganismContact } from '../atomic/organisms/OrganismContact';
import { OrganismIntroduction } from '../atomic/organisms/OrganismIntro';
import { TemplateStacks as StacksType } from '../atomic/templates/TemplateStack';
import { Footer } from '../components/Footer';
import { Projects } from '../components/Projects';
import type { IStacksResponse } from '../interfaces/IStacksResponse';
import portfolioApi from '../services/axios';

const DynamicTemplateStacks = dynamic<React.ComponentProps<typeof StacksType>>(
  () =>
    import('../atomic/templates/TemplateStack').then(
      ({ TemplateStacks }) => TemplateStacks,
    ),
  {
    ssr: false,
    loading: () => <Circle className="animate-spin" />,
  },
);

type HomePageProps = {
  stacks: {
    id: number;
    name: string;
    icon: string;
  }[];
};

const Home: NextPage<HomePageProps> = ({ stacks }) => {
  return (
    <div>
      <OrganismIntroduction />
      <DynamicTemplateStacks stacksContent={stacks} />
      <Projects />
      {/* <OrganismContact /> */}
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { data },
  } = await portfolioApi.get<IStacksResponse>('/stacks');

  const stacks = data.map(({ attributes, id }) => ({
    id,
    name: attributes.name,
    icon: attributes.svg,
  }));

  return {
    props: { stacks },
    revalidate: 60 * 60 * 24, // 1 day
  };
};

export default Home;
