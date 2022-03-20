import Head from 'next/head';
import { Children } from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Wordle clone</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      {children}
    </main>
  );
};

export default Layout;
