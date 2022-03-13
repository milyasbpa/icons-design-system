import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ISensorWindowIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function SensorWindowIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ISensorWindowIconProps) {
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
        d="M18 4.3833V20.3833H6V4.3833H18ZM18 2.3833H6C4.9 2.3833 4 3.2833 4 4.3833V20.3833C4 21.4833 4.9 22.3833 6 22.3833H18C19.1 22.3833 20 21.4833 20 20.3833V4.3833C20 3.2833 19.1 2.3833 18 2.3833ZM7 19.3833H17V13.3833H7V19.3833ZM10 10.3833H14V11.3833H17V5.3833H7V11.3833H10V10.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
