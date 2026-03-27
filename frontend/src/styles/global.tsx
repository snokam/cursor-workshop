import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-primary: #ff0000;
    --color-light-blue: #90ee90;
  }

  body {
    background-color: var(--color-light-blue);
    color: var(--color-primary);
  }

  main {
    display: grid;
  }
`;
