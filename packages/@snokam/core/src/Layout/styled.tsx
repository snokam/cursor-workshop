import styled from "@emotion/styled";
import { ContentProps, Padding, SectionProps, Width } from "./types";
import { css } from "@emotion/react";
import { getPaddingValue } from "./utils";

const Section = styled.div<SectionProps>`
  display: flex;
  flex-direction: column;

  ${({ stretchItems = false }) =>
    stretchItems
      ? css`
          align-items: stretch;
        `
      : css`
          align-items: flex-start;
        `}

  ${({ padding = Padding.Small }) => {
    if (typeof padding === "object") {
      const top = getPaddingValue(padding.top ?? Padding.None);
      const bottom = getPaddingValue(padding.bottom ?? Padding.None);

      return css`
        padding-top: ${top};
        padding-bottom: ${bottom};
      `;
    }

    const value = getPaddingValue(padding);
    return css`
      padding: ${value} 0;
    `;
  }}
`;

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 2;
  width: 100%;

  @media only screen and (min-width: 576px) {
    padding: 2rem;
  }

  ${({ width }) => {
    switch (width) {
      case Width.ExtraNarrow:
        return css`
          max-width: 880px;
        `;
      case Width.Narrow:
        return css`
          max-width: 1080px;
        `;
      case Width.Normal:
      default:
        return css`
          max-width: 1272px;
        `;
    }
  }}
`;

export default { Section, Content };
