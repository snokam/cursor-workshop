import { css } from "@emotion/react";

export const globalStyles = css`
  :root {
    --color-primary: #1b4332;
    --color-light-blue: #d8f3dc;
  }

  body {
    background-color: var(--color-light-blue);
    color: var(--color-primary);
  }

  main {
    display: grid;
  }
`;
