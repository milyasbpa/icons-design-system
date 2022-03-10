import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IBrowserNotSupportedIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function BrowserNotSupportedIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IBrowserNotSupportedIconProps) {
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
        d="M19 6.3833V16.8833L20.95 18.8333C20.98 18.6833 21 18.5333 21 18.3833V6.3833C21 5.2833 20.1 4.3833 19 4.3833H6.5L8.5 6.3833H19Z"
        fill={colorCode}
      />
      <path
        d="M3.86001 4.3333C3.51001 3.9833 2.94001 3.9833 2.59001 4.3333C2.24001 4.6833 2.24001 5.2533 2.59001 5.6033L3.00001 6.0233V18.3833C3.00001 19.4833 3.90001 20.3833 5.00001 20.3833H17.36L18.78 21.8033C19.13 22.1533 19.7 22.1533 20.05 21.8033C20.4 21.4533 20.4 20.8833 20.05 20.5333L3.86001 4.3333ZM5.00001 18.3833V8.0233L15.36 18.3833H5.00001Z"
        fill={colorCode}
      />
    </svg>
  );
}
