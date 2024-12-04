import { trpc } from "../utils/trpc";
import type { AppProps, AppType } from "next/app";
import React from "react";
const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default trpc.withTRPC(MyApp);
