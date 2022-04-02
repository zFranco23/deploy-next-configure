import { NextPage } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import React, { ReactElement, ReactNode } from "react";
import "../styles/globals.css";


type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
}

type CustomAppProps = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: CustomAppProps) {

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
