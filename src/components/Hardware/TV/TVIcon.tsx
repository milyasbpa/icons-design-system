import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITVIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TVIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITVIconProps) {
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
        d="M21 3.3833H3C1.9 3.3833 1 4.2833 1 5.3833V17.3833C1 18.4833 1.9 19.3833 3 19.3833H8V20.3833C8 20.9333 8.45 21.3833 9 21.3833H15C15.55 21.3833 16 20.9333 16 20.3833V19.3833H21C22.1 19.3833 22.99 18.4833 22.99 17.3833L23 5.3833C23 4.2833 22.1 3.3833 21 3.3833ZM20 17.3833H4C3.45 17.3833 3 16.9333 3 16.3833V6.3833C3 5.8333 3.45 5.3833 4 5.3833H20C20.55 5.3833 21 5.8333 21 6.3833V16.3833C21 16.9333 20.55 17.3833 20 17.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
