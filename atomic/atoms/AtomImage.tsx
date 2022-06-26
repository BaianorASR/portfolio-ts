/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

type AtomImageProps = {
  source: string;
  alt: string;
  tailwindClass?: string;
  className?: string;
};

export const AtomImage: FC<AtomImageProps> = ({ source, alt, tailwindClass }) => {
  return <img src={source} alt={alt} className={tailwindClass} />;
};
