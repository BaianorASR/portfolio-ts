import { FC } from 'react'

import { HeaderNavBar } from './HeaderNavbar';

export const Header: FC = () => {

  return (
    <header className='flex justify-between px-4 py-1 relative'>
      <h1 className='flex text-nord-13 text-xl font-bold'>Baianim.ts</h1>
      <HeaderNavBar />
    </header>
  )
}