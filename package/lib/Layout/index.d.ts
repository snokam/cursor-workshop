export declare const Section: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & import("./types").SectionProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const Content: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: React.ElementType;
} & import("./types").ContentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare enum Breakpoints {
    xs = 576,
    sm = 768,
    md = 992,
    lg = 1272,
    xl = 1920
}
declare const _default: {
    Container: ({ children, as, theme, transitions, ...restOfProps }: import("./types").ContainerProps) => import("react/jsx-runtime").JSX.Element;
    Section: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & import("./types").SectionProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Content: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & import("./types").ContentProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
};
export default _default;
