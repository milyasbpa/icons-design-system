import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDesktopMacIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DesktopMacIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDesktopMacIconProps) {
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
        d="M21 2.3833H3C1.9 2.3833 1 3.2833 1 4.3833V16.3833C1 17.4833 1.9 18.3833 3 18.3833H10L8.37 20.8333C7.93 21.4933 8.4 22.3833 9.2 22.3833H14.8C15.6 22.3833 16.08 21.4933 15.63 20.8333L14 18.3833H21C22.1 18.3833 23 17.4833 23 16.3833V4.3833C23 3.2833 22.1 2.3833 21 2.3833ZM21 14.3833H3V5.3833C3 4.8333 3.45 4.3833 4 4.3833H20C20.55 4.3833 21 4.8333 21 5.3833V14.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
