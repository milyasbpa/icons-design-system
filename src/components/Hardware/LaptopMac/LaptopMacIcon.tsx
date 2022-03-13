import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ILaptopMacIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function LaptopMacIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ILaptopMacIconProps) {
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
        d="M20 18.3833C21.1 18.3833 21.99 17.4833 21.99 16.3833L22 5.3833C22 4.2833 21.1 3.3833 20 3.3833H4C2.9 3.3833 2 4.2833 2 5.3833V16.3833C2 17.4833 2.9 18.3833 4 18.3833H0C0 19.4833 0.9 20.3833 2 20.3833H22C23.1 20.3833 24 19.4833 24 18.3833H20ZM5 5.3833H19C19.55 5.3833 20 5.8333 20 6.3833V15.3833C20 15.9333 19.55 16.3833 19 16.3833H5C4.45 16.3833 4 15.9333 4 15.3833V6.3833C4 5.8333 4.45 5.3833 5 5.3833ZM12 19.3833C11.45 19.3833 11 18.9333 11 18.3833C11 17.8333 11.45 17.3833 12 17.3833C12.55 17.3833 13 17.8333 13 18.3833C13 18.9333 12.55 19.3833 12 19.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
