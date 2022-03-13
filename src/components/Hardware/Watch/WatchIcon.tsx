import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWatchIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WatchIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWatchIconProps) {
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
      <g clip-path="url(#clip0_73_5305)">
        <path
          d="M20 12.3833C20 9.8433 18.81 7.5733 16.96 6.1133L16.28 2.0533C16.12 1.0933 15.28 0.383301 14.31 0.383301H9.7C8.72 0.383301 7.88 1.0933 7.72 2.0533L7.05 6.1133C5.19 7.5733 4 9.8333 4 12.3833C4 14.9333 5.19 17.1933 7.05 18.6533L7.72 22.7133C7.88 23.6733 8.72 24.3833 9.7 24.3833H14.31C15.29 24.3833 16.12 23.6733 16.28 22.7133L16.96 18.6533C18.81 17.1933 20 14.9233 20 12.3833ZM6 12.3833C6 9.0733 8.69 6.3833 12 6.3833C15.31 6.3833 18 9.0733 18 12.3833C18 15.6933 15.31 18.3833 12 18.3833C8.69 18.3833 6 15.6933 6 12.3833Z"
          fill={colorCode}
        />
      </g>
      <defs>
        <clipPath id="clip0_73_5305">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.383301)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
