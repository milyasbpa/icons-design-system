import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICastIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CastIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICastIconProps) {
  const colorCode = colorDatas[color];
  return (
    <svg
      width={size}
      height={size}
      transform={`rotate(${rotate})`}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 3.3833H3C1.9 3.3833 1 4.2833 1 5.3833V7.3833C1 7.9333 1.45 8.3833 2 8.3833C2.55 8.3833 3 7.9333 3 7.3833V6.3833C3 5.8333 3.45 5.3833 4 5.3833H20C20.55 5.3833 21 5.8333 21 6.3833V18.3833C21 18.9333 20.55 19.3833 20 19.3833H15C14.45 19.3833 14 19.8333 14 20.3833C14 20.9333 14.45 21.3833 15 21.3833H21C22.1 21.3833 23 20.4833 23 19.3833V5.3833C23 4.2833 22.1 3.3833 21 3.3833ZM2.14 14.4733C1.54 14.3733 1 14.8633 1 15.4733C1 15.9633 1.36 16.3733 1.85 16.4533C3.93 16.8133 5.57 18.4533 5.93 20.5333C6.01 21.0233 6.42 21.3833 6.91 21.3833C7.52 21.3833 8 20.8433 7.91 20.2433C7.43 17.2833 5.09 14.9533 2.14 14.4733V14.4733ZM1 18.3833V21.3833H4C4 19.7233 2.66 18.3833 1 18.3833ZM2.1 10.4333C1.51 10.3833 1 10.8433 1 11.4333C1 11.9433 1.38 12.3733 1.88 12.4233C6.15 12.8333 9.55 16.2333 9.96 20.5033C10.01 21.0033 10.44 21.3733 10.95 21.3733C11.55 21.3733 12.01 20.8533 11.95 20.2633C11.42 15.0733 7.29 10.9533 2.1 10.4333V10.4333Z"
        fill={colorCode}
      />
    </svg>
  );
}
