import { FC, useEffect, useRef, useState } from 'react';

import { useWidth } from '../../hooks/useWidth';
import { AtomHamburger } from '../atoms/AtomHamburger';
import { AtomText } from '../atoms/AtomText';

export const MoleculeHeaderNavbar: FC = () => {
  const width = useWidth();
  const lastWidth = useRef(width);
  const [isNavOpen, setIsNavOpen] = useState(width > 640);
  const [isVisibleHamburger, setIsVisibleHamburger] = useState(false);

  useEffect(() => {
    if (width > 640) {
      lastWidth.current = width;
      setIsNavOpen(true);
      if (isVisibleHamburger) setIsVisibleHamburger(false);
    } else if (!isVisibleHamburger) setIsVisibleHamburger(true);

    if (lastWidth.current >= 640 && width <= 640) {
      setIsNavOpen(false);
    }
  }, [isVisibleHamburger, width]);

  return (
    <div className="relative">
      {isVisibleHamburger && (
        <AtomHamburger
          tailwindClass="flex-col flex items-start content-start justify-start transition-all rounded mr-3"
          changeIsOpenHamburger={setIsNavOpen}
          isOpenHamburger={isNavOpen}
        />
      )}
      {isNavOpen && (
        <nav className=" text-nord-5 border-nord-2 sm:flex-row top-10 sm:p-0 sm:relative sm:top-0 sm:right-4 sm:shadow-none sm:border-none sm:bg-[transparent] absolute flex flex-col p-2 border rounded shadow right-4 animate-fade bg-nord-0 backdrop-filter backdrop-blur">
          <AtomText tailwindClass="hover:bg-nord-0 sm:hover:bg-nord-1 hover:text-nord-7 px-3 py-1 rounded cursor-pointer">
            Sobre
          </AtomText>
          <AtomText tailwindClass="hover:bg-nord-0 sm:hover:bg-nord-1 hover:text-nord-7 px-3 py-1 rounded cursor-pointer">
            Projetos
          </AtomText>
          <AtomText tailwindClass="hover:bg-nord-0 sm:hover:bg-nord-1 hover:text-nord-7 px-3 py-1 rounded cursor-pointer">
            Contatos
          </AtomText>
        </nav>
      )}
    </div>
  );
};
