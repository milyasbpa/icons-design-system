import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardBackspaceIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardBackspaceIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardBackspaceIconProps) {
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
        d="M20 11.3833H6.83001L9.71001 8.5033C10.1 8.1133 10.1 7.4833 9.71001 7.0933C9.32001 6.7033 8.69001 6.7033 8.30001 7.0933L3.71001 11.6833C3.32001 12.0733 3.32001 12.7033 3.71001 13.0933L8.30001 17.6833C8.69001 18.0733 9.32001 18.0733 9.71001 17.6833C10.1 17.2933 10.1 16.6633 9.71001 16.2733L6.83001 13.3833H20C20.55 13.3833 21 12.9333 21 12.3833C21 11.8333 20.55 11.3833 20 11.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
