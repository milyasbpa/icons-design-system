import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardHideIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardHideIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardHideIconProps) {
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
        d="M19 8.3833V11.3833H5.83001L8.71001 8.5033C9.10001 8.1133 9.10001 7.4833 8.71001 7.0933C8.32001 6.7033 7.69001 6.7033 7.30001 7.0933L2.71001 11.6833C2.32001 12.0733 2.32001 12.7033 2.71001 13.0933L7.30001 17.6833C7.69001 18.0733 8.32001 18.0733 8.71001 17.6833C9.10001 17.2933 9.10001 16.6633 8.71001 16.2733L5.83001 13.3833H20C20.55 13.3833 21 12.9333 21 12.3833V8.3833C21 7.8333 20.55 7.3833 20 7.3833C19.45 7.3833 19 7.8333 19 8.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
