import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITabletMacIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TabletMacIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITabletMacIconProps) {
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
      <g clip-path="url(#clip0_73_5297)">
        <path
          d="M18.5 0.383301H4.5C3.12 0.383301 2 1.5033 2 2.8833V21.8833C2 23.2633 3.12 24.3833 4.5 24.3833H18.5C19.88 24.3833 21 23.2633 21 21.8833V2.8833C21 1.5033 19.88 0.383301 18.5 0.383301ZM11.5 23.3833C10.67 23.3833 10 22.7133 10 21.8833C10 21.0533 10.67 20.3833 11.5 20.3833C12.33 20.3833 13 21.0533 13 21.8833C13 22.7133 12.33 23.3833 11.5 23.3833ZM19 19.3833H4V3.3833H19V19.3833Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_5297">
          <rect
            width={size}
            height={size}
            fill="white"
            transform="translate(0 0.383301)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
