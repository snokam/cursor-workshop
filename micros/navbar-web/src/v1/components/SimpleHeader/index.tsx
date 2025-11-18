import React from "react";
import Styled from "./styled";
import Image from "next/image";
import { SimpleHeaderProps, HeaderTheme } from "./types";
import Layout, { LayoutTheme } from "@snokam/core/layout";

export function SimpleHeader({
  theme = HeaderTheme.Light,
}: SimpleHeaderProps) {
  return (
    <Layout.Container as="header" theme={theme as unknown as LayoutTheme}>
      <Layout.Content>
        <Styled.Menu>
          <Styled.Link href="https://www.snokam.no/">
            {theme === HeaderTheme.Light && (
              <Image
                alt="Snøkam logo"
                src="https://cdn.sanity.io/images/201f7kip/production/b4e2aeeacb7bda07fdc260ee616e9b834c10b133-384x75.svg"
                height={30}
                width={159}
              />
            )}
            {theme === HeaderTheme.Dark && (
              <Image
                alt="Snøkam logo"
                src="https://cdn.sanity.io/images/201f7kip/production/87ee2684038b5bb4d751336fd025e1cbed388ee7-384x75.svg"
                height={30}
                width={159}
              />
            )}
          </Styled.Link>
        </Styled.Menu>
      </Layout.Content>
    </Layout.Container>
  );
}

export default SimpleHeader;
