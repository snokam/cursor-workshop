import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

import { CommonMetaTags } from "@snokam/core";

import { Global } from "@emotion/react";
import { globalStyles } from "../utils/styles";

export default function Document(props: DocumentProps) {
  return (
    <Html lang="en">
      <Head>
        <Global styles={globalStyles} />
        <CommonMetaTags />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
