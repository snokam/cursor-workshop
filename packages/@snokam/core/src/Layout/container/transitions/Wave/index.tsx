import { Color } from "../../../../Themes";
import { Position, LayoutTheme } from "../../../types";
import Styled from "./styled";

export interface Props {
  theme: LayoutTheme;
  position: Position;
  color?: Color;
  flipY?: boolean;
  flipX?: boolean;
}

const Wave = ({
  position,
  theme,
  flipY = false,
  flipX,
  color = Color.DarkGreen,
}: Props) => {
  // Determine if flipX is based on position when not explicitly provided
  const isFlippedX = flipX ?? position === Position.Bottom;

  // Calculate the inverted theme if conditions match
  const shouldInvertTheme =
    (position === Position.Top && isFlippedX) ||
    (position === Position.Bottom && !isFlippedX);

  const invertedTheme = shouldInvertTheme
    ? theme === LayoutTheme.Dark
      ? LayoutTheme.Light
      : LayoutTheme.Dark
    : theme;

  return (
    <Styled.Container position={position}>
      <Styled.Content flipY={flipY} flipX={isFlippedX}>
        <Styled.Curve>
          <Styled.Circle color={color} />
          <Styled.Background
            theme={shouldInvertTheme ? invertedTheme : theme}
          />
        </Styled.Curve>
      </Styled.Content>
    </Styled.Container>
  );
};

export default Wave;
