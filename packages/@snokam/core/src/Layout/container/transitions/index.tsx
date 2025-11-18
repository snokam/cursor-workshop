import {
  Position,
  LayoutTheme,
  TransitionType,
  TransitionWithOptions,
} from "../../types";
import Curve from "./Curve";
import Wave from "./Wave";

interface Props {
  theme: LayoutTheme;
  transition: TransitionWithOptions;
  position: Position;
}

const Transition = ({ transition, theme, position }: Props) => {
  switch (transition.type) {
    case TransitionType.Wave:
      return (
        <Wave
          theme={theme}
          position={position}
          flipY={transition.flipY}
          flipX={transition.flipX}
          color={transition.color}
        />
      );
    case TransitionType.Curve:
      return (
        <Curve
          theme={theme}
          position={position}
          flipY={transition.flipY}
          sizeInPercent={transition.sizeInPercent ?? 0.25}
        />
      );
    default:
      return null;
  }
};

export default Transition;
