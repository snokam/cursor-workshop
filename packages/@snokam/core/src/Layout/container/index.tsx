import Styled from './styled';
import { ContainerProps, Position, LayoutTheme } from '../types';
import Transition from './transitions';

const Container = ({
  children,
  as = 'div',
  theme = LayoutTheme.Dark,
  transitions,
  popover,
  ...restOfProps
}: ContainerProps) => {
  return (
    <Styled.Container as={as} theme={theme} {...restOfProps}>
      {children}
      {transitions?.top && (
        <Transition
          theme={theme}
          transition={transitions.top}
          position={Position.Top}
        />
      )}
      {transitions?.bottom && (
        <Transition
          theme={theme}
          transition={transitions.bottom}
          position={Position.Bottom}
        />
      )}
    </Styled.Container>
  );
};

export default Container;
