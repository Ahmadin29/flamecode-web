import { LayoutContext } from "@/contexts/LayoutContext";
import { Html, Head, Main, NextScript } from "next/document";
import { useContext } from "react";

export default function Document() {

  const {title,description,keywords} = useContext(LayoutContext);

  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BeGRID | Make an App project with less code</title>
        <meta name="description" content="BeGRID is a platform that allows you to create and build your own projects with less code." />
        <link rel="icon" href="/icon-white.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
