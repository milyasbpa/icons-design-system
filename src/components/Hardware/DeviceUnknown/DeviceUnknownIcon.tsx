import * as React from "react";
import { Color } from "../../../types/color";
import { colorDatas } from "../../../datas/color";

export interface IDeviceUnknownIconProps {
  size?: number;
  rotate?: number;
  color?: Color;
}

export default function DeviceUnknownIcon({
  size = 24,
  rotate = 0,
  color = "black",
}: IDeviceUnknownIconProps) {
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
        d="M17 1.3833H7C5.9 1.3833 5 2.2833 5 3.3833V21.3833C5 22.4833 5.9 23.3833 7 23.3833H17C18.1 23.3833 19 22.4833 19 21.3833V3.3833C19 2.2833 18.1 1.3833 17 1.3833ZM17 19.3833H7V5.3833H17V19.3833ZM11 16.3833H13V18.3833H11V16.3833ZM9.52 10.5733H9.65C9.98 10.5733 10.24 10.3433 10.35 10.0333C10.59 9.3433 11.26 8.8233 12.01 8.8233C12.94 8.8233 13.76 9.6433 13.76 10.5733C13.76 11.8933 12.27 12.1233 11.53 13.3933H11.52C11.44 13.5333 11.38 13.6833 11.32 13.8433C11.31 13.8633 11.3 13.8733 11.3 13.8933C11.29 13.9133 11.29 13.9333 11.29 13.9433C11.19 14.2533 11.13 14.6033 11.13 15.0233H12.89C12.89 14.7733 12.93 14.5533 13.01 14.3533C13.55 12.8833 15.78 12.4933 15.49 10.1733C15.3 8.6233 14.06 7.3333 12.51 7.1333C10.74 6.9033 9.22 7.9133 8.7 9.4333C8.5 9.9933 8.93 10.5733 9.52 10.5733Z"
        fill={colorCode}
      />
    </svg>
  );
}
