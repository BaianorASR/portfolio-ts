/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useLayoutEffect, useState } from 'react';

export function useWidth() {
  const [width, setWidth] = useState(0); // default width, detect on server.

  const handleResize = () => setWidth(window.innerWidth);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return width;
}