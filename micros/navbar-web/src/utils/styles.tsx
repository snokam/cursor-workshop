import { css } from "@emotion/react";

export const globalStyles = css`
  html {
    display: flex;
    height: 100%;
  }

  body,
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;
