import "@/styles/globals.css";
import type { AppProps } from "next/app";
import BlankLayout from "@/components/layouts/blank";
import DefaultLayout from "@/components/layouts/default";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Check if the page has a flag to disable layout
  const hasCustomLayout = (Component as any).disableLayout;

  // Use DefaultLayout for all pages unless they explicitly disable it
  const LayoutWrapper = hasCustomLayout ? BlankLayout : DefaultLayout;

  return(
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}
