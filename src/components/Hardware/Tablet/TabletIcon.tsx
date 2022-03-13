import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITabletIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TabletIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITabletIconProps) {
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
        d="M21 4.3833H3C1.9 4.3833 1 5.2833 1 6.3833V18.3833C1 19.4833 1.9 20.3833 3 20.3833H21C22.1 20.3833 22.99 19.4833 22.99 18.3833L23 6.3833C23 5.2833 22.1 4.3833 21 4.3833ZM19 18.3833H5V6.3833H19V18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
