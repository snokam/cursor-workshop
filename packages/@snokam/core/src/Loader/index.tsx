import Styled from "./styled";
import LogoLoader, { LogoLoaderProps, LoaderVariant } from "./logo";

const PageLoader = (props: LogoLoaderProps) => (
  <Styled.Container>
    <LogoLoader {...props} />
  </Styled.Container>
);

export { LogoLoader, PageLoader, LoaderVariant };
