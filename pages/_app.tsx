import "../styles/globals.css";
import type { AppProps } from "next/app";
import DrawerContextProvider from "../src/shared/contexts/DrawerContext";
import '../styles/mailchimp.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DrawerContextProvider>
      <Component {...pageProps} />
    </DrawerContextProvider>
  );
}

export default MyApp;
