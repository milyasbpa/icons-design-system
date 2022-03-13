import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ITabletAndroidIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function TabletAndroidIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ITabletAndroidIconProps) {
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
      <g clip-path="url(#clip0_73_5295)">
        <path
          d="M18 0.383301H6C4.34 0.383301 3 1.7233 3 3.3833V21.3833C3 23.0433 4.34 24.3833 6 24.3833H18C19.66 24.3833 21 23.0433 21 21.3833V3.3833C21 1.7233 19.66 0.383301 18 0.383301ZM13.5 22.3833H10.5C10.22 22.3833 10 22.1633 10 21.8833C10 21.6033 10.22 21.3833 10.5 21.3833H13.5C13.78 21.3833 14 21.6033 14 21.8833C14 22.1633 13.78 22.3833 13.5 22.3833ZM19.25 19.3833H4.75V3.3833H19.25V19.3833Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_5295">
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
