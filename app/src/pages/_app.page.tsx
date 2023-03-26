import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { AppHeader } from '@/components/AppHeader';
import { AppFooter } from '@/components/AppFooter';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Coffee Store</title>
        <meta
          name="description"
          content="E-commerce when you find the best coffee bean"
        />
      </Head>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  );
}
