import { ChevronRight } from "@mui/icons-material";
import Styled from "./styled";
import Image from "next/image";
import { Layout } from "@snokam/core";
import { FooterProps, FooterTheme } from "./types";
import { LayoutTheme, Padding } from "@snokam/core/layout";

export const Footer = ({
  theme = FooterTheme.Dark,
  showMiljofyrtorn = true,
  showBlog = true,
  transitions,
}: FooterProps) => {
  const blogUrl = "/blog";
  const miljofyrtornUrl = "/miljofyrtorn";
  const snokamUrl = "https://www.snokam.no/";

  return (
    <Layout.Container
      as="footer"
      theme={theme as unknown as LayoutTheme}
      transitions={transitions}
    >
      <Layout.Content>
        <Layout.Section padding={Padding.Large}>
          {theme === FooterTheme.Dark && (
            <Image
              alt="Snøkam logo"
              style={{ marginBottom: "2.5rem", maxWidth: "100%" }}
              src="https://cdn.sanity.io/images/201f7kip/production/87ee2684038b5bb4d751336fd025e1cbed388ee7-384x75.svg"
              width={236}
              height={46}
            />
          )}
          {theme === FooterTheme.Light && (
            <Image
              alt="Snøkam logo"
              style={{ marginBottom: "2.5rem", maxWidth: "100%" }}
              src="https://cdn.sanity.io/images/201f7kip/production/b4e2aeeacb7bda07fdc260ee616e9b834c10b133-384x75.svg"
              width={236}
              height={46}
            />
          )}
          <Styled.Content>
            <p>
              E-post<br />
              <a href="mailto:hei@snokam.no">hei@snokam.no</a>
            </p>
            <p>
              Snøkam AS<br />
              Org.nr: 930 377 953
            </p>
          </Styled.Content>
          {showMiljofyrtorn && (
            <Styled.Link href={miljofyrtornUrl}>
              Miljøfyrtårn
              <ChevronRight />
            </Styled.Link>
          )}
          {showBlog && (
            <Styled.Link href={blogUrl}>
              Snøkam-bloggen
              <ChevronRight />
            </Styled.Link>
          )}
        </Layout.Section>
      </Layout.Content>
    </Layout.Container>
  );
};

export default Footer;
