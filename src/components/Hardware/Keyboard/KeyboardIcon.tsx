import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardIconProps) {
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
        d="M20 5.3833H4C2.9 5.3833 2.01 6.2833 2.01 7.3833L2 17.3833C2 18.4833 2.9 19.3833 4 19.3833H20C21.1 19.3833 22 18.4833 22 17.3833V7.3833C22 6.2833 21.1 5.3833 20 5.3833ZM11 8.3833H13V10.3833H11V8.3833ZM11 11.3833H13V13.3833H11V11.3833ZM8 8.3833H10V10.3833H8V8.3833ZM8 11.3833H10V13.3833H8V11.3833ZM7 13.3833H5V11.3833H7V13.3833ZM7 10.3833H5V8.3833H7V10.3833ZM15 17.3833H9C8.45 17.3833 8 16.9333 8 16.3833C8 15.8333 8.45 15.3833 9 15.3833H15C15.55 15.3833 16 15.8333 16 16.3833C16 16.9333 15.55 17.3833 15 17.3833ZM16 13.3833H14V11.3833H16V13.3833ZM16 10.3833H14V8.3833H16V10.3833ZM19 13.3833H17V11.3833H19V13.3833ZM19 10.3833H17V8.3833H19V10.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
