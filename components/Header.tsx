import { FC } from 'react'

import { HeaderNavBar } from './HeaderNavbar';

export const Header: FC = () => {

  return (
    <header className='backdrop-blur-md border-b-nord-1 h-14 fixed top-0 z-50 flex items-center justify-between w-screen px-4 py-1 border-b select-none'>
      <h1 className='text-nord-13 flex text-xl font-bold'>Baianim.ts</h1>
      <HeaderNavBar />
    </header>
  )
}