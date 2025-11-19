import React from "react";
interface Props {
    children: React.ReactNode;
}
export declare enum Color {
    Inherit = "inherit",
    DarkBlue = "#071d41",
    Blue = "#67DAFD",
    LightBlue = "#E1F8FF",
    LightGreen = "#ACFFA4",
    DarkGreen = "#11CF7F"
}
export declare enum BaseColor {
    DarkBlue = "#071d41",
    LightBlue = "#E1F8FF"
}
export declare const theme: import("@mui/material").Theme;
export declare const Provider: ({ children }: Props) => import("react/jsx-runtime").JSX.Element;
declare const _default: {
    theme: import("@mui/material").Theme;
    Provider: ({ children }: Props) => import("react/jsx-runtime").JSX.Element;
};
export default _default;
