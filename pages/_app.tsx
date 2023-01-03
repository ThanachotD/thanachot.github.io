import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';


export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
