import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Position, LayoutTheme } from "../../../types";
import { Color } from "../../../..";

const Curve = styled.div<{
  theme: LayoutTheme;
  sizeInPercent: number;
}>`
  position: absolute;
  z-index: 2;
  height: calc(100vw * ${({ sizeInPercent }) => sizeInPercent ?? 0.25});
  width: calc(100vw * ${({ sizeInPercent }) => sizeInPercent ?? 0.25});
  right: -1px;
  top: -1px;

  ${({ theme }) => {
    const svg = `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path
          fill="${theme === LayoutTheme.Dark ? Color.LightBlue : Color.DarkBlue}"
          fill-rule="evenodd"
          d="
            M 0,0 
            H 100 
            V 100 
            H 0 
            Z
            M 0,0
            A 100,100 0 0,1 100,100
            L 0,100
            Z
          "
        />
      </svg>
    `;

    const waveDataURI = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;

    return css`
      background: url("${waveDataURI}") no-repeat;
      background-size: cover;
      background-position: center;
    `;
  }}
`;

const Container = styled.div<{
  position: Position;
  sizeInPercent: number;
}>`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  height: calc(100vw * ${({ sizeInPercent }) => sizeInPercent ?? 0.25});
  width: 100vw;
  right: 0;

  ${({ position }) =>
    position === Position.Top
      ? css`
          top: 0px;
        `
      : css`
          bottom: 0px;
        `}
`;

const Content = styled.div<{ flipY: boolean; flipX: boolean }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  transform: ${({ flipY, flipX }) =>
    `${flipY ? "rotateY(180deg)" : ""} ${flipX ? "rotateX(180deg)" : ""}`.trim()};
`;

export default { Container, Content, Curve };
