import styled from "@emotion/styled";
import { FooterTheme } from "../v1";

const Container = styled.div<{ theme: FooterTheme }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => {
    if (theme === FooterTheme.Light) {
      return `
          background-color: var(--color-primary);
          color: var(--color-light-blue);
        `;
    }
    if (theme === FooterTheme.Dark) {
      return `
          background-color: var(--color-light-blue);
          color: var(--color-primary);
        `;
    }
  }}
`;

export default { Container };
