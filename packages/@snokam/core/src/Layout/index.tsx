import Styled from "./styled";
import Container from "./container";

export const Section = Styled.Section;
export const Content = Styled.Content;

export enum Breakpoints {
  xs = 576,
  sm = 768,
  md = 992,
  lg = 1272,
  xl = 1920,
}

export default {
  Container,
  Section,
  Content,
};
