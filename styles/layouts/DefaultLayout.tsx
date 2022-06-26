import { FC, ReactNode } from 'react';

type ComponentLayoutProps = {
  children: ReactNode;
  background?: string;
  display?: 'col' | 'row';
  tailwindClass?: string;
};

const ComponentLayout: FC<ComponentLayoutProps> = ({
  children,
  background,
  display = 'col',
  tailwindClass,
}) => {
  return (
    <div className={background}>
      <div
        className={`max-w-screen-xl flex mx-auto relative flex-${display} ${tailwindClass}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ComponentLayout;
