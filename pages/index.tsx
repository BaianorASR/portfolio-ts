import type { NextPage } from 'next'

import { Header } from '../components/Header';
import { Intro } from '../components/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className=''>
        <Intro />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum porro quo reprehenderit, consequatur praesentium dolor exercitationem eaque ab vero sint voluptatum obcaecati ex iusto eligendi sapiente, magni cumque aut?</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum porro quo reprehenderit, consequatur praesentium dolor exercitationem eaque ab vero sint voluptatum obcaecati ex iusto eligendi sapiente, magni cumque aut?</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum porro quo reprehenderit, consequatur praesentium dolor exercitationem eaque ab vero sint voluptatum obcaecati ex iusto eligendi sapiente, magni cumque aut?</p>
        </div>
      </div>
    </>
  )
}

export default Home
