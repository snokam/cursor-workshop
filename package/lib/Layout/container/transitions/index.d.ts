import { Position, LayoutTheme, TransitionWithOptions } from "../../types";
interface Props {
    theme: LayoutTheme;
    transition: TransitionWithOptions;
    position: Position;
}
declare const Transition: ({ transition, theme, position }: Props) => import("react/jsx-runtime").JSX.Element;
export default Transition;
