import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IScannerIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ScannerIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IScannerIconProps) {
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
        d="M19.8 11.0833L5.15 5.73331C4.63 5.54331 4.05 5.81331 3.85 6.33331C3.66 6.86331 3.93 7.44331 4.45 7.63331L17.6 12.3833H5C3.9 12.3833 3 13.2833 3 14.3833V18.3833C3 19.4833 3.9 20.3833 5 20.3833H19C20.1 20.3833 21 19.4833 21 18.3833V12.8833C21 12.0833 20.5 11.2833 19.8 11.0833ZM7 17.3833H5V15.3833H7V17.3833ZM18 17.3833H10C9.45 17.3833 9 16.9333 9 16.3833C9 15.8333 9.45 15.3833 10 15.3833H18C18.55 15.3833 19 15.8333 19 16.3833C19 16.9333 18.55 17.3833 18 17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
