import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILaptopWindowsIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LaptopWindowsIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILaptopWindowsIconProps) {
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
        d="M20 18.3833V17.3833C21.1 17.3833 21.99 16.4833 21.99 15.3833L22 5.3833C22 4.2833 21.1 3.3833 20 3.3833H4C2.9 3.3833 2 4.2833 2 5.3833V15.3833C2 16.4833 2.9 17.3833 4 17.3833V18.3833H1C0.45 18.3833 0 18.8333 0 19.3833C0 19.9333 0.45 20.3833 1 20.3833H23C23.55 20.3833 24 19.9333 24 19.3833C24 18.8333 23.55 18.3833 23 18.3833H20ZM5 5.3833H19C19.55 5.3833 20 5.8333 20 6.3833V14.3833C20 14.9333 19.55 15.3833 19 15.3833H5C4.45 15.3833 4 14.9333 4 14.3833V6.3833C4 5.8333 4.45 5.3833 5 5.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
