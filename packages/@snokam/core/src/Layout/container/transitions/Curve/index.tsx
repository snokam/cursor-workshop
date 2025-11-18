import { Color } from "../../../..";
import { Position, LayoutTheme } from "../../../types";
import Styled from "./styled";

export interface Props {
  theme: LayoutTheme;
  position: Position;
  color?: Color;
  flipY?: boolean;
  sizeInPercent: number;
}

const Curve = ({ theme, flipY = false, position, sizeInPercent }: Props) => {
  return (
    <Styled.Container position={position} sizeInPercent={sizeInPercent}>
      <Styled.Content flipY={flipY} flipX={position === Position.Bottom}>
        <Styled.Curve theme={theme} sizeInPercent={sizeInPercent} />
      </Styled.Content>
    </Styled.Container>
  );
};

export default Curve;
