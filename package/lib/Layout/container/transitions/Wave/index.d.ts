import { Color } from "../../../../Themes";
import { Position, LayoutTheme } from "../../../types";
export interface Props {
    theme: LayoutTheme;
    position: Position;
    color?: Color;
    flipY?: boolean;
    flipX?: boolean;
}
declare const Wave: ({ position, theme, flipY, flipX, color, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Wave;
