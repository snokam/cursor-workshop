import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Position, LayoutTheme } from "../../../types";
import { Color } from "../../../..";

const Curve = styled.div`
  height: 100%;
  width: 100%;

  ${() => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 80" preserveAspectRatio="none">
        <path d="M0,40 C100,40 100,0 200,0 C300,0 300,40 400,40 L400,80 L0,80 Z"  fill="black" transform="scale(1,-1) translate(0,-80)" />
      </svg>`;

    const waveDataURI = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;

    return css`
      mask: url("${waveDataURI}") repeat-x;
      mask-position: calc(100vw / 2);
      mask-size: 2500px 100%;
    `;
  }}
`;

const Background = styled.div<{ theme: LayoutTheme }>`
  position: absolute;
  z-index: 0;

  ${({ theme }) =>
    theme === LayoutTheme.Dark
      ? css`
          background-color: var(--color-light-blue);
        `
      : css`
          background-color: var(--color-primary);
        `}

  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
`;

const Circle = styled.div<{ color: Color }>`
  position: absolute;
  z-index: 1;
  top: 50px;
  height: 200px;
  width: 100%;

  ${({ color }) => {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 40" preserveAspectRatio="none">
        <path d="M0,40 C100,40 100,0 200,0 C300,0 300,40 400,40" fill="${color}" />
      </svg>`;

    const dataURI = `data:image/svg+xml;charset=utf8,${encodeURIComponent(svg)}`;

    return css`
      background: url("${dataURI}") no-repeat;
      background-position: calc(50% - 500px) 50%;
      background-size: 2500px 100%;
    `;
  }}
`;

const Container = styled.div<{ position: Position }>`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  height: 200px;
  width: 100%;

  ${({ position }) =>
    position === Position.Top
      ? css`
          top: -100px;
        `
      : css`
          bottom: -100px;
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

export default { Container, Content, Curve, Circle, Background };
