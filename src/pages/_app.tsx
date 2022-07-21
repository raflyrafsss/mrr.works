import "~/styles/globals.css";
import "nprogress/nprogress.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { nprogress } from "~/libs/nprogress";
import { Layout } from "~/components/layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleStart = (_: string, { shallow }: { shallow: boolean }) => {
      if (!shallow) {
        nprogress.start();
      }
    };
    const handleStop = () => {
      nprogress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  return (
    <Layout
      id="root"
      className="w-full min-h-screen flex flex-col antialiased bg-gray-50"
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
