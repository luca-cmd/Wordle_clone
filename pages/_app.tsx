import '../styles/globals.css';
import Layout from './components/Layout/Main';
import type { AppProps } from 'next/app';
import '@fontsource/roboto';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
