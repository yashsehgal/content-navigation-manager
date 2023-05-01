import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="main-view">
        <h1 className="leading-snug text-2xl tracking-tight font-medium">
          {'content navigation manager.'}
        </h1>
        <p className="leading-6 text-gray-500 mt-6">
          {
            'A simple content render navigation manager. used for documentation content navigations.'
          }
        </p>
      </main>
      <Component {...pageProps} />
    </>
  );
}
