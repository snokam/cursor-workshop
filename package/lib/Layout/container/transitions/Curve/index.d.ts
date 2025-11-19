import { Color } from "../../../..";
import { Position, LayoutTheme } from "../../../types";
export interface Props {
    theme: LayoutTheme;
    position: Position;
    color?: Color;
    flipY?: boolean;
    sizeInPercent: number;
}
declare const Curve: ({ theme, flipY, position, sizeInPercent }: Props) => import("react/jsx-runtime").JSX.Element;
export default Curve;
