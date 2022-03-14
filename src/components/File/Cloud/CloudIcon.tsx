import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface ICloudIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function CloudIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: ICloudIconProps) {
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
        d="M19.35 10.4233C18.67 6.9733 15.64 4.3833 12 4.3833C9.11 4.3833 6.6 6.0233 5.35 8.4233C2.34 8.7433 0 11.2933 0 14.3833C0 17.6933 2.69 20.3833 6 20.3833H19C21.76 20.3833 24 18.1433 24 15.3833C24 12.7433 21.95 10.6033 19.35 10.4233Z"
        fill={colorCode}
      />
    </svg>
  );
}
