import { Position, LayoutTheme } from "../../../types";
import { Color } from "../../../..";
declare const _default: {
    Container: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & {
        position: Position;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Content: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & {
        flipY: boolean;
        flipX: boolean;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Curve: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Circle: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & {
        color: Color;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
    Background: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme;
        as?: React.ElementType;
    } & {
        theme: LayoutTheme;
    }, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
};
export default _default;
