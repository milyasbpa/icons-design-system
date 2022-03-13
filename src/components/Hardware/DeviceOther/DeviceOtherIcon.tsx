import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDeviceOtherIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DeviceOtherIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDeviceOtherIconProps) {
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
        d="M3 7.3833C3 6.8333 3.45 6.3833 4 6.3833H20C20.55 6.3833 21 5.9333 21 5.3833C21 4.8333 20.55 4.3833 20 4.3833H3C1.9 4.3833 1 5.2833 1 6.3833V18.3833C1 19.4833 1.9 20.3833 3 20.3833H6C6.55 20.3833 7 19.9333 7 19.3833C7 18.8333 6.55 18.3833 6 18.3833H4C3.45 18.3833 3 17.9333 3 17.3833V7.3833ZM12 12.3833H10C9.45 12.3833 9 12.8333 9 13.3833V14.1633C8.39 14.7133 8 15.4933 8 16.3833C8 17.2733 8.39 18.0533 9 18.6033V19.3833C9 19.9333 9.45 20.3833 10 20.3833H12C12.55 20.3833 13 19.9333 13 19.3833V18.6033C13.61 18.0533 14 17.2633 14 16.3833C14 15.5033 13.61 14.7133 13 14.1633V13.3833C13 12.8333 12.55 12.3833 12 12.3833ZM11 17.8833C10.17 17.8833 9.5 17.2133 9.5 16.3833C9.5 15.5533 10.17 14.8833 11 14.8833C11.83 14.8833 12.5 15.5533 12.5 16.3833C12.5 17.2133 11.83 17.8833 11 17.8833ZM22 8.3833H16C15.5 8.3833 15 8.8833 15 9.3833V19.3833C15 19.8833 15.5 20.3833 16 20.3833H22C22.5 20.3833 23 19.8833 23 19.3833V9.3833C23 8.8833 22.5 8.3833 22 8.3833ZM21 18.3833H17V10.3833H21V18.3833Z"
        fill={colorCode}
      />
    </svg>
  );
}
