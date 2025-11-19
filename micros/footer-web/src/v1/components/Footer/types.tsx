import { Transitions } from "@snokam/core/layout";

export enum FooterTheme {
  Light = "light",
  Dark = "dark",
}

export interface FooterProps {
  showMiljofyrtorn?: boolean;
  showBlog?: boolean;
  theme?: FooterTheme;
  transitions?: Transitions;
}
