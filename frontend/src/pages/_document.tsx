import { CommonMetaTags } from "@snokam/core";
import { Global } from "@emotion/react";
import { globalStyles } from "@/styles/global";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default function Document() {
  return (
    <Html>
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

Document.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await NextDocument.getInitialProps(ctx);
  return { ...initialProps };
};
