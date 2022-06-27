import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { OrganismHeader } from '../atomic/organisms/OrganismHeader';
import UtilsCtxProvider from '../context/UtilsCtxProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UtilsCtxProvider>
        <OrganismHeader />
        <Component {...pageProps} />
      </UtilsCtxProvider>
    </>
  );
}

export default MyApp;
