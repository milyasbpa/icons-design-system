import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILaptopIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LaptopIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILaptopIconProps) {
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
        d="M20 18.3833C21.1 18.3833 22 17.4833 22 16.3833V6.3833C22 5.2833 21.1 4.3833 20 4.3833H4C2.9 4.3833 2 5.2833 2 6.3833V16.3833C2 17.4833 2.9 18.3833 4 18.3833H1C0.45 18.3833 0 18.8333 0 19.3833C0 19.9333 0.45 20.3833 1 20.3833H23C23.55 20.3833 24 19.9333 24 19.3833C24 18.8333 23.55 18.3833 23 18.3833H20ZM5 6.3833H19C19.55 6.3833 20 6.8333 20 7.3833V15.3833C20 15.9333 19.55 16.3833 19 16.3833H5C4.45 16.3833 4 15.9333 4 15.3833V7.3833C4 6.8333 4.45 6.3833 5 6.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
