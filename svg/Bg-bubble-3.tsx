import { memo } from 'react';

type IconSvgProps = {
  tailwindClass: string;
};

function Icon({ tailwindClass }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={tailwindClass}
      viewBox="0 0 217.04 167.993"
    >
      <path d="M205.04 95.995H92.045c-6.59-.043-11.922-5.393-11.922-11.997 0-6.625 5.373-12 12-12h47.875c6.629 0 12-5.371 12-12 0-6.625-5.371-12-12-12h-18.852c-6.627 0-12-5.369-12-11.998 0-6.625 5.373-12 12-12h2.061c6.627 0 12-5.373 12-12s-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12s5.373 12 12 12h17.875c6.617.011 11.98 5.381 11.98 11.998 0 6.623-5.365 11.988-11.98 12H12c-6.627 0-12 5.375-12 12 0 6.629 5.373 12 12 12h36.292c6.626 0 12.001 5.375 12.001 12 0 6.604-5.334 11.954-11.924 11.997h.672c-6.627 0-12 5.375-12 12 0 6.629 5.373 12 12 12h22c6.625 0 12 5.375 12 12 0 6.627-5.375 11.998-12 11.998h-52c-6.627 0-12 5.375-12 12 0 6.629 5.373 12 12 12h96c6.625 0 12-5.371 12-12 0-6.625-5.375-12-12-12h-1.75c-6.627 0-12-5.371-12-11.998 0-6.625 5.373-12 12-12h91.748c6.629 0 12-5.371 12-12 .001-6.625-5.371-12-11.999-12z"></path>
    </svg>
  );
}

export default memo(Icon);
