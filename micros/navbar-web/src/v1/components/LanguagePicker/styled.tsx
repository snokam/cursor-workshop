import styled from "@emotion/styled";
import { HeaderTheme } from "../SimpleHeader/types";
import { css } from "@emotion/react";

const Item = styled.div`
  display: flex;
  align-items: center;
`;

const Form = styled.form<{ $theme: HeaderTheme }>`
  display: flex;
  align-items: center;
  gap: 8px;

  ${({ $theme }) =>
    $theme === HeaderTheme.Light
      ? css`
          // Colors
          label {
            color: var(--color-primary) !important;
          }

          //Borders
          .MuiOutlinedInput-notchedOutline {
            border-color: var(--color-primary) !important;
          }

          //Arrow
          svg {
            border-color: var(--color-primary) !important;
          }
        `
      : css`
          // Colors
          label {
            color: var(--color-light-blue) !important;
          }

          //Borders
          .MuiOutlinedInput-notchedOutline {
            border-color: var(--color-light-blue) !important;
          }

          // Arrow
          svg {
            fill: var(--color-light-blue) !important  ;
          }
        `}
`;

export default { Item, Form };
