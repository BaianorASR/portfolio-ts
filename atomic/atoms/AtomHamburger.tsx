import { List } from 'phosphor-react';
import { Dispatch, FC, SetStateAction } from 'react';

type AtomHamburgerProps = {
  tailwindClass?: string;
  isOpenHamburger: boolean;
  changeIsOpenHamburger: Dispatch<SetStateAction<boolean>>;
};

export const AtomHamburger: FC<AtomHamburgerProps> = ({
  tailwindClass,
  isOpenHamburger,
  changeIsOpenHamburger,
}) => {
  return (
    <div
      className={`${tailwindClass} ${isOpenHamburger && 'backdrop-brightness-90'}`}
      onClick={() => changeIsOpenHamburger(prev => !prev)}
    >
      <List size={32} className={`${isOpenHamburger ? 'text-nord-7' : 'text-nord-5'}`} />
    </div>
  );
};
