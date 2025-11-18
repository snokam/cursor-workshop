import { CSSProperties, ReactNode, SVGProps } from "react";
import styled from "@emotion/styled";
import { Color } from "../Themes/index";

export enum LoaderVariant {
  Slide = "slide",
  Pulse = "pulse",
  TriplePulse = "triple-pulse",
}

export interface LogoLoaderProps extends SVGProps<SVGSVGElement> {
  variant?: LoaderVariant;
  color?: Color;
}

interface CustomStyle extends CSSProperties {
  [key: string]: any;
}

const LogoLoader = ({ variant, ...props }: LogoLoaderProps): ReactNode => {
  switch (variant) {
    case LoaderVariant.TriplePulse:
      return <TriplePulseLogoLoader {...props} />;
    case LoaderVariant.Pulse:
      return <PulseLogoLoader {...props} />;
    default:
      return <SlideLogoLoader {...props} />;
  }
};

const BaseLogoLoader = (props: SVGProps<SVGSVGElement>): ReactNode => {
  const svgProps = props as React.SVGProps<SVGSVGElement>;
  return (
    <svg
      width="50"
      height="50"
      viewBox="-100 -100 676 669"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...svgProps}
    >
    <g id="part1" style={{ "--order": 1 } as CustomStyle}>
      <path d="M160.487 12.4386L11.4039 179.477C-2.54697 195.011 -1.62397 205.881 13.4473 219.622L41.5808 245.348C56.6375 259.099 67.295 258.886 81.2495 243.339L230.333 76.302C244.282 60.7264 243.358 49.8556 228.289 36.1554L200.149 10.43C185.097 -3.29097 174.44 -3.07785 160.487 12.4386Z" />
    </g>
    <g id="part2" style={{ "--order": 2 } as CustomStyle}>
      <path d="M335.181 54.0359L69.5597 351.124C55.5026 366.81 56.4967 377.61 71.8745 391.419L100.66 417.075C115.966 430.755 126.979 430.471 141.025 414.814L406.646 117.725C420.702 102.076 419.636 91.1342 404.331 77.4312L375.545 51.7757C360.167 38.0599 349.225 38.3442 335.181 54.0359Z" />
    </g>
    <g id="part3" style={{ "--order": 3 } as CustomStyle}>
      <path d="M395.133 225.624L245.791 392.428C231.849 407.948 232.702 418.82 247.772 432.577L275.865 458.346C290.892 472.107 301.549 471.965 315.536 456.4L464.878 289.595C478.82 274.16 477.968 263.219 462.898 249.446L434.805 223.677C419.777 209.932 409.12 210.073 395.133 225.624Z" />
    </g>
  </svg>
  );
};

const SlideLogoLoader = styled(BaseLogoLoader)<LogoLoaderProps>`
  color: ${({ color }) => color ?? Color.Inherit};

  g {
    opacity: 0;
    animation: dropIn 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    animation-delay: calc(var(--order) * 200ms);
    animation-iteration-count: infinite;
  }

  @keyframes dropIn {
    0% {
      opacity: 0;
      transform: translate(20%, -20%);
    }

    40%,
    60% {
      opacity: 1;
      transform: translate(0%);
    }

    100% {
      opacity: 0;
      transform: translate(-20%, 20%);
    }
  }
`;

const PulseLogoLoader = styled(BaseLogoLoader)<LogoLoaderProps>`
  color: ${({ color }) => color ?? Color.Inherit};
  g {
    transform-origin: center;
    animation: pulse 1.2s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const TriplePulseLogoLoader = styled(BaseLogoLoader)<LogoLoaderProps>`
  color: ${({ color }) => color ?? Color.Inherit};
  g {
    transform-origin: center;
    animation: pulse 1.2s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-delay: calc(var(--order) * 400ms);
    animation-iteration-count: infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }

    33% {
      transform: scale(1.1);
    }

    66% {
      transform: scale(1);
    }
  }
`;

export default LogoLoader;
