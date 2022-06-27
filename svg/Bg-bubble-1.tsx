import { memo } from 'react';

type IconSvgProps = {
  tailwindClass: string;
};

function Icon({ tailwindClass }: IconSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={tailwindClass}
      viewBox="0 0 234.999 119.688"
    >
      <path d="M223 47.688h-19.02c-6.617-.012-11.98-5.375-11.98-12 0-5.699 3.984-10.469 9.316-11.688h19.309c6.629 0 11.999-5.371 11.999-12 0-6.625-5.37-12-11.999-12h-128c-6.629 0-12 5.375-12 12 0 6.629 5.371 12 12 12h70.554c5.332 1.223 9.32 5.988 9.32 11.688 0 6.629-5.375 12-12 12H127c-6.629 0-12 5.375-12 12 0 6.629 5.372 12 12 12h5c-.555 0-1.094.051-1.629.125 5.855.793 10.379 5.805 10.379 11.875 0 6.078-4.52 11.082-10.371 11.879.531.07 1.07.121 1.621.121H12c-6.627 0-12 5.375-12 12 0 6.629 5.373 12 12 12h156c6.625 0 12-5.371 12-12 0-6.625-5.375-12-12-12h.25c-6.629 0-12-5.371-12-12 0-6.625 5.371-12 12-12H223c6.625 0 11.999-5.371 11.999-12 0-6.625-5.374-12-11.999-12z"></path>
    </svg>
  );
}

export default memo(Icon);