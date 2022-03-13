import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISensorDoorIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SensorDoorIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISensorDoorIconProps) {
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
        d="M18 2.3833H6C4.9 2.3833 4 3.2833 4 4.3833V20.3833C4 21.4833 4.9 22.3833 6 22.3833H18C19.1 22.3833 20 21.4833 20 20.3833V4.3833C20 3.2833 19.1 2.3833 18 2.3833ZM15.5 13.8833C14.67 13.8833 14 13.2133 14 12.3833C14 11.5533 14.67 10.8833 15.5 10.8833C16.33 10.8833 17 11.5533 17 12.3833C17 13.2133 16.33 13.8833 15.5 13.8833Z"
        fill={colorCode}
      />
    </svg>
  );
}
