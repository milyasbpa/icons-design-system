import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IWarningIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function WarningIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IWarningIconProps) {
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
        d="M4.47 21.3834H19.53C21.07 21.3834 22.03 19.7134 21.26 18.3834L13.73 5.37335C12.96 4.04335 11.04 4.04335 10.27 5.37335L2.74 18.3834C1.97 19.7134 2.93 21.3834 4.47 21.3834ZM12 14.3834C11.45 14.3834 11 13.9334 11 13.3834V11.3834C11 10.8334 11.45 10.3834 12 10.3834C12.55 10.3834 13 10.8334 13 11.3834V13.3834C13 13.9334 12.55 14.3834 12 14.3834ZM13 18.3834H11V16.3834H13V18.3834Z"
        fill={colorCode}
      />
    </svg>
  );
}
