import { ReactNode } from "react";
import SimpleHeader, { HeaderTheme } from "@snokam/navbar-web/v1";
import Footer from "@snokam/footer-web/v1";

interface Props {
  children: ReactNode;
}

export const Page = ({ children }: Props) => (
  <>
    <SimpleHeader theme={HeaderTheme.Light} />
    <main>{children}</main>
    <Footer />
  </>
);
