import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDesktopWindowsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DesktopWindowsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDesktopWindowsIconProps) {
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
        d="M21 2.3833H3C1.9 2.3833 1 3.2833 1 4.3833V16.3833C1 17.4833 1.9 18.3833 3 18.3833H10V20.3833H9C8.45 20.3833 8 20.8333 8 21.3833C8 21.9333 8.45 22.3833 9 22.3833H15C15.55 22.3833 16 21.9333 16 21.3833C16 20.8333 15.55 20.3833 15 20.3833H14V18.3833H21C22.1 18.3833 23 17.4833 23 16.3833V4.3833C23 3.2833 22.1 2.3833 21 2.3833ZM20 16.3833H4C3.45 16.3833 3 15.9333 3 15.3833V5.3833C3 4.8333 3.45 4.3833 4 4.3833H20C20.55 4.3833 21 4.8333 21 5.3833V15.3833C21 15.9333 20.55 16.3833 20 16.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
