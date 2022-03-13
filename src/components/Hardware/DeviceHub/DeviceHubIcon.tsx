import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDeviceHubIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DeviceHubIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDeviceHubIconProps) {
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
        d="M17 16.3833L13 12.3833V9.2033C14.35 8.7133 15.26 7.3133 14.93 5.7433C14.68 4.5633 13.7 3.6233 12.51 3.4233C10.63 3.1133 9 4.5533 9 6.3833C9 7.6833 9.84 8.7833 11 9.2033V12.3833L7 16.3833H4C3.45 16.3833 3 16.8333 3 17.3833V20.3833C3 20.9333 3.45 21.3833 4 21.3833H7C7.55 21.3833 8 20.9333 8 20.3833V18.3333L12 14.1333L16 18.3333V20.3833C16 20.9333 16.45 21.3833 17 21.3833H20C20.55 21.3833 21 20.9333 21 20.3833V17.3833C21 16.8333 20.55 16.3833 20 16.3833H17Z"
        fill={colorCode}
      />
    </svg>
  );
}
