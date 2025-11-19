import styled from "@emotion/styled";
import { HeaderTheme } from "../v1";

const Container = styled.div<{ theme: HeaderTheme }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => {
    if (theme === HeaderTheme.Light) {
      return `
          background-color: var(--color-primary);
          color: var(--color-light-blue);
        `;
    }
    if (theme === HeaderTheme.Dark) {
      return `
          background-color: var(--color-light-blue);
          color: var(--color-primary);
        `;
    }
  }}
`;

export default { Container };
