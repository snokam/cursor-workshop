import { ElementType, HTMLAttributes } from "react";
import { Color } from "../Themes";
export declare enum LayoutTheme {
    Light = "light",
    Dark = "dark"
}
export declare enum TransitionType {
    Wave = "wave",
    Curve = "curve"
}
export type TransitionWithOptions = Options & ({
    type: TransitionType.Wave;
    color?: Color;
    flipX?: boolean;
} | {
    type: TransitionType.Curve;
    sizeInPercent?: number;
});
export interface Transitions {
    top?: TransitionWithOptions;
    bottom?: TransitionWithOptions;
}
export type Options = {
    flipY?: boolean;
};
export declare enum Position {
    Top = "top",
    Bottom = "bottom"
}
export declare enum Padding {
    None = "none",
    Small = "small",
    Medium = "medium",
    Large = "large"
}
export declare enum Width {
    Normal = "normal",
    Narrow = "narrow",
    ExtraNarrow = "extraNarrow"
}
export interface SectionProps {
    stretchItems?: boolean;
    padding?: Padding | {
        top?: Padding;
        bottom?: Padding;
    };
}
export interface ContentProps {
    width?: Width;
}
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    as?: ElementType;
    theme?: LayoutTheme;
    transitions?: Transitions;
}
