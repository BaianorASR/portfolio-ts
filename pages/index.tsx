import type { NextPage } from 'next';

import { Footer } from '../components/Footer';
import { Intro } from '../components/Intro';
import { Stacks } from '../components/Stacks';

const Home: NextPage = () => {
  return (
    <div className="">
      <Intro />
      <Stacks />
      <div className="mt-4">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum porro
            quo reprehenderit, consequatur praesentium dolor exercitationem eaque ab vero
            sint voluptatum obcaecati ex iusto eligendi sapiente, magni cumque aut?
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum porro
            quo reprehenderit, consequatur praesentium dolor exercitationem eaque ab vero
            sint voluptatum obcaecati ex iusto eligendi sapiente, magni cumque aut?
          </p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum porro
            quo reprehenderit, consequatur praesentium dolor exercitationem eaque ab vero
            sint voluptatum obcaecati ex iusto eligendi sapiente, magni cumque aut?
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
