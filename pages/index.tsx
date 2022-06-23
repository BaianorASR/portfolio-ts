import type { NextPage } from 'next';

import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { Projects } from '../components/Projects';
import { Stacks } from '../components/Stacks';

const Home: NextPage = () => {
  return (
    <div>
      <Intro />
      <Stacks />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
