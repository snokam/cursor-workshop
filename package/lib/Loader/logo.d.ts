import { ReactNode, SVGProps } from "react";
import { Color } from "../Themes/index";
export declare enum LoaderVariant {
    Slide = "slide",
    Pulse = "pulse",
    TriplePulse = "triple-pulse"
}
export interface LogoLoaderProps extends SVGProps<SVGSVGElement> {
    variant?: LoaderVariant;
    color?: Color;
}
declare const LogoLoader: ({ variant, ...props }: LogoLoaderProps) => ReactNode;
export default LogoLoader;
