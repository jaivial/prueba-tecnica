import { trpc } from "../utils/trpc";
import type { AppProps, AppType } from "next/app";
import React from "react";
import "../styles/globals.css";
const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);
