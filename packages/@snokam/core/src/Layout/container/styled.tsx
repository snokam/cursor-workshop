import styled from "@emotion/styled";
import { LayoutTheme } from "../types";
import { css } from "@emotion/react";

const Container = styled.div<{ theme: LayoutTheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${({ theme }) =>
    theme === LayoutTheme.Dark
      ? css`
          color: var(--color-light-blue);
          background-color: var(--color-primary);
        `
      : css`
          color: var(--color-primary);
          background-color: var(--color-light-blue);
        `}
`;

const Children = styled.div``;

export default { Container, Children };
