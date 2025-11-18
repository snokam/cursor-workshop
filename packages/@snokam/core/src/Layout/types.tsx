import React, { ElementType, HTMLAttributes } from "react";
import { Color } from "../Themes";

/*
  Theme
*/

export enum LayoutTheme {
  Light = "light",
  Dark = "dark",
}

/*
  Transitions
*/
export enum TransitionType {
  Wave = "wave",
  Curve = "curve",
}

export type TransitionWithOptions = Options &
  (
    | {
        type: TransitionType.Wave;
        color?: Color;
        flipX?: boolean;
      }
    | {
        type: TransitionType.Curve;
        sizeInPercent?: number;
      }
  );

export interface Transitions {
  top?: TransitionWithOptions;
  bottom?: TransitionWithOptions;
}

/*
  Options
*/

export type Options = {
  flipY?: boolean;
};

export enum Position {
  Top = "top",
  Bottom = "bottom",
}

export enum Padding {
  None = "none",
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export enum Width {
  Normal = "normal",
  Narrow = "narrow",
  ExtraNarrow = "extraNarrow",
}

/*
  Component props
*/
export interface SectionProps {
  stretchItems?: boolean;
  padding?:
    | Padding
    | {
        top?: Padding;
        bottom?: Padding;
      };
}

export interface ContentProps {
  width?: Width;
}

export interface ContainerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'popover'> {
  as?: ElementType;
  theme?: LayoutTheme;
  transitions?: Transitions;
  children?: React.ReactNode;
  popover?: "" | "auto" | "manual" | "hint";
}
