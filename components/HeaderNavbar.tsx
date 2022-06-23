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
    <>
      {isVisibleHamburger && (
        <div
          className="-order-1 flex flex-col justify-start content-start items-start transition-all"
          onClick={() => setIsNavOpen(prev => !prev)}
        >
          <List size={32} className="text-nord-14" />
        </div>
      )}
                {isNavOpen && (
            <nav className="bg-nord-1 text-nord-5 border border-nord-2 rounded transition-all shadow p-3 flex flex-col sm:flex-row absolute top-10 sm:top-2 sm:right-4">
              <p className="px-3 py-1 hover:bg-nord-0 rounded">Sobre</p>
              <p className="px-3 py-1 hover:bg-nord-0 rounded">Projetos</p>
              <p className="px-3 py-1 hover:bg-nord-0 rounded">Contatos</p>
            </nav>
          )}
    </>
  );
}