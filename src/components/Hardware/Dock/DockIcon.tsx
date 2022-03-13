import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDockIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DockIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDockIconProps) {
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
        d="M9 23.3833H15C15.55 23.3833 16 22.9333 16 22.3833C16 21.8333 15.55 21.3833 15 21.3833H9C8.45 21.3833 8 21.8333 8 22.3833C8 22.9333 8.45 23.3833 9 23.3833ZM16 1.3933L8 1.3833C6.9 1.3833 6 2.2833 6 3.3833V17.3833C6 18.4833 6.9 19.3833 8 19.3833H16C17.1 19.3833 18 18.4833 18 17.3833V3.3833C18 2.2833 17.1 1.3933 16 1.3933ZM16 15.3833H8V5.3833H16V15.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
