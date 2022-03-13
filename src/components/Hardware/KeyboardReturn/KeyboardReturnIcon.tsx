import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IKeyboardReturnIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function KeyboardReturnIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IKeyboardReturnIconProps) {
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
        d="M20 3.3833H4C2.9 3.3833 2.01 4.2833 2.01 5.3833L2 15.3833C2 16.4833 2.9 17.3833 4 17.3833H20C21.1 17.3833 22 16.4833 22 15.3833V5.3833C22 4.2833 21.1 3.3833 20 3.3833ZM11 6.3833H13V8.3833H11V6.3833ZM11 9.3833H13V11.3833H11V9.3833ZM8 6.3833H10V8.3833H8V6.3833ZM8 9.3833H10V11.3833H8V9.3833ZM7 11.3833H5V9.3833H7V11.3833ZM7 8.3833H5V6.3833H7V8.3833ZM15 15.3833H9C8.45 15.3833 8 14.9333 8 14.3833C8 13.8333 8.45 13.3833 9 13.3833H15C15.55 13.3833 16 13.8333 16 14.3833C16 14.9333 15.55 15.3833 15 15.3833ZM16 11.3833H14V9.3833H16V11.3833ZM16 8.3833H14V6.3833H16V8.3833ZM19 11.3833H17V9.3833H19V11.3833ZM19 8.3833H17V6.3833H19V8.3833ZM12.35 23.0333L15.14 20.2433C15.45 19.9333 15.23 19.3933 14.79 19.3933H9.21C8.76 19.3933 8.54 19.9333 8.86 20.2433L11.65 23.0333C11.84 23.2233 12.16 23.2233 12.35 23.0333Z"
        fill={colorCode}
      />
    </svg>
  );
}
