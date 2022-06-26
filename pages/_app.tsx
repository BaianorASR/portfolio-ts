import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { OrganismHeader } from '../atomic/organisms/OrganismHeader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <OrganismHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
