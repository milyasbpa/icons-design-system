import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IMouseIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function MouseIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IMouseIconProps) {
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
        d="M13 1.45331V9.38331H20C20 5.30331 16.95 1.94331 13 1.45331ZM4 15.3833C4 19.8033 7.58 23.3833 12 23.3833C16.42 23.3833 20 19.8033 20 15.3833V11.3833H4V15.3833ZM11 1.45331C7.05 1.94331 4 5.30331 4 9.38331H11V1.45331Z"
        fill={colorCode}
      />
    </svg>
  );
}
