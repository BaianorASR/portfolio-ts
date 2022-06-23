import { List } from 'phosphor-react';
import React, { useEffect, useRef, useState } from 'react';

import { useWidth } from '../hooks/useWidth';

export function HeaderNavBar() {
  const width = useWidth();
  const lastWidth = useRef(width)

  const [isNavOpen, setIsNavOpen] = useState(width > 640);

  const [isVisibleHamburger, setIsVisibleHamburger] = useState(false);

  useEffect(() => {
    if (width > 640) {
      lastWidth.current = width
      setIsNavOpen(true);
      if (isVisibleHamburger) setIsVisibleHamburger(false);
    } else if (!isVisibleHamburger) setIsVisibleHamburger(true);

    if (lastWidth.current >= 640 && width < 640) {
      setIsNavOpen(false);
    }

  }, [isVisibleHamburger, width]);

  return (
    <div className="relative">
      {isVisibleHamburger && (
        <div
          className={`flex flex-col items-start content-start justify-start transition-all ${isNavOpen && 'backdrop-brightness-90'} rounded mr-3`}
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <List size={32} className={`${isNavOpen ? 'text-nord-7' : 'text-nord-5'}`} />
        </div>
      )}
        {isNavOpen && (
          <nav className=" text-nord-5 border-nord-2 sm:flex-row top-10 sm:p-0 sm:relative sm:top-0 sm:right-4 sm:shadow-none sm:border-none sm:bg-[transparent] absolute flex flex-col p-2 border rounded shadow right-4 animate-fade bg-nord-0 backdrop-filter backdrop-blur">
            <p className="hover:bg-nord-0 sm:hover:bg-nord-1 hover:text-nord-7 px-3 py-1 rounded cursor-pointer">Sobre</p>
            <p className="hover:bg-nord-0 sm:hover:bg-nord-1 hover:text-nord-7 px-3 py-1 rounded cursor-pointer">Projetos</p>
            <p className="hover:bg-nord-0 sm:hover:bg-nord-1 hover:text-nord-7 px-3 py-1 rounded cursor-pointer">Contatos</p>
          </nav>
        )}
    </div>
  );
}