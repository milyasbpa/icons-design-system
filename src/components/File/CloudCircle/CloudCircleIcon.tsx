import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICloudCircleIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CloudCircleIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICloudCircleIconProps) {
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
        d="M12 2.3833C6.48 2.3833 2 6.8633 2 12.3833C2 17.9033 6.48 22.3833 12 22.3833C17.52 22.3833 22 17.9033 22 12.3833C22 6.8633 17.52 2.3833 12 2.3833ZM16.5 16.3833H8C6.34 16.3833 5 15.0433 5 13.3833C5 11.7233 6.34 10.3833 8 10.3833H8.14C8.58 8.6533 10.13 7.3833 12 7.3833C14.21 7.3833 16 9.1733 16 11.3833H16.5C17.88 11.3833 19 12.5033 19 13.8833C19 15.2633 17.88 16.3833 16.5 16.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
