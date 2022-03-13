import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IToysIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function ToysIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IToysIconProps) {
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
        d="M12 12.3833C12 9.3833 14.5 6.8833 17.5 6.8833C20.07 6.8833 22.27 8.7133 22.85 11.1233C23 11.7633 22.53 12.3833 21.88 12.3833H12ZM12 12.3833C12 15.3833 9.5 17.8833 6.5 17.8833C3.93 17.8833 1.73 16.0533 1.15 13.6433C1 13.0033 1.47 12.3833 2.12 12.3833H12ZM12 12.3833C9 12.3833 6.5 9.8833 6.5 6.8833C6.5 4.3133 8.33 2.1133 10.74 1.5333C11.38 1.3833 12 1.8533 12 2.5033V12.3833ZM12 12.3833C15 12.3833 17.5 14.8833 17.5 17.8833C17.5 20.4533 15.67 22.6533 13.26 23.2333C12.62 23.3833 12 22.9133 12 22.2633V12.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
